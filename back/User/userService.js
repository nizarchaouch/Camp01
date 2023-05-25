const UserModel = require('./userModel');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')
const JWT_SECRET_KEY = "MyKey";

const ERROR_MESSAGES = {
  INTERNAL_SERVER_ERROR: 'Internal Server Error',
  UNABLE_TO_ADD: 'Unable to add',
  USER_NOT_FOUND: 'User not found',
};

const signup = async (req, res, next) => {
  const { nom, prenom, mail, numero, password } = req.body;


  let existingUser;
  try {
    existingUser = await UserModel.findOne({ mail: mail });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists! Login Instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new UserModel({
    nom,
    prenom,
    mail,
    numero,
    role: 0,
    password,
    password: hashedPassword,

  });


  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(201).json({ message: user });
};


// const login = async (req, res) => {
//   const { mail, password } = req.body;

//   let existingUser;
//   try {
//     existingUser = await UserModel.findOne({ mail: mail });
//   } catch (err) {
//     return new Error(err);
//   }
//   if (!existingUser) {
//     return res.status(401).json({ message: "User not found. Signup Please" })
//   }
//   const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
//   if (!isPasswordCorrect) {
//     return res.status(401).json({ message: 'Invalid Password' })
//   }
//   const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
//     expiresIn: "35s",

//   });
//   console.log("Generated Token\n", token);
//   res.cookie(String(existingUser._id), token, {
//     path: "/",
//     expires: new Date(Date.now() + 1000 * 30),
//     httpOnly: true,
//     sameSite: 'lax',
//   });
//   existingUser.token = token;
//   return res
//     .status(200)
//     .json({ message: 'Successfully Logged In', user: existingUser });
// };
const login = async (req, res) => {
  data = req.body;
  mail = await UserModel.findOne({ mail: data.mail }) 
  payload = {
    _id: mail._id,
    mail: mail.mail,
    nom: mail.nom,
    role: mail.role
}
  if (!mail && !payload.role==0) {
      res.status(404).send('mail or password invalid!')  
  }else {
      validPass = bcrypt.compareSync(data.password, mail.password)
      if (!validPass) {
          res.status(401).send('mail or password invalid!')
      } else {
          payload = {
              _id: mail._id,
              mail: mail.mail,
              nom: mail.nom,
              role: mail.role
          }
          token = jwt.sign(payload, 'nizar123')

          res.status(200).send({message: 'Successfully Logged In',mytoken: token })
      }
  }

}

const forget = async (req, res, next) => {
  const { mail } = req.body;

  try {
    const user = await UserModel.findOne({ mail });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a password reset token and store it in the user object
    const resetToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '15m' }
    );
    user.resetToken = resetToken;
    await user.save();

    // Send an email to the user with a link to reset password
    // You can use a nodemailer or any other email library to send emails
    // Here is an example using nodemailer:
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "getawayvoy.services@gmail.com",
        pass: "byoxgpbbfanfopju",
      },
    });

    const mailOptions = {
      from: "getawayvoy.services@gmail.com",
      to: mail,
      subject: 'Password reset request',
      html: `
      <p>You have requested to reset your password. Click the link below to reset it:</p>
      <a href="http://localhost:3002/resetPwd/${resetToken}">http://localhost:3002/reset-password/${resetToken}</a>
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to send email' });
      } else {
        console.log('Email sent: ' + info.response);
        return res.status(200).json({ message: 'Email sent' });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


const reset = async (req, res, next) => {
  const { resetToken, password } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'getawayvoy.services@gmail.com',
      pass: 'byoxgpbbfanfopju',
    },
  });

  try {
    const decodedToken = jwt.verify(resetToken, process.env.JWT_SECRET_KEY);

    const user = await UserModel.findOne({ _id: decodedToken.id, resetToken });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    // Update the user's password and remove the reset token
    user.password = bcrypt.hashSync(password);
    user.resetToken = null;
    await user.save();

    const mailOptions = {
      to: user.mail,
      from: 'getawayvoy.services@gmail.com',
      subject: 'Your password has been changed',
      text: 'Hello,\n\n' +
        'This is a confirmation that the password for your account ' + user.mail + ' has just been changed. Ahawa ' + password + '\n'
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      }
    });

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getUser = async (req, res, next) => {
  const user = await UserModel.findOne({
    _id: req.params.id
  }).then((user) => {
    res.status(200).json(user);
  }).catch((error) => {
    res.status(500).json({ error: error });
  });

}


const showUsers = async (req, res) => {
  try {
    const docs = await UserModel.find({});
    res.json(docs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userToDelete = await UserModel.findById(req.params.id, 'nom');
    if (!userToDelete) {
      return res.status(404).json({ message: ERROR_MESSAGES.USER_NOT_FOUND });
    }
    await UserModel.findByIdAndDelete(req.params.id);
    const docs = await UserModel.find({});
    res.status(200).json({ message: `User ${userToDelete.nom} is deleted!`, docs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
      new: true, // pour renvoyer le document mis à jour plutôt que l'ancien document
    });
    if (!updatedUser) {
      return res.status(404).json({ message: ERROR_MESSAGES.USER_NOT_FOUND });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

const findUser = async (req, res) => {
  try {
    const { searchValue } = req.query;
    const users = await UserModel.find({
      $or: [
        { nom: new RegExp(searchValue, 'i') },
        { prenom: new RegExp(searchValue, 'i') },
        { mail: new RegExp(searchValue, 'i') },
        { numero: new RegExp(searchValue, 'i') },
      ]
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};




module.exports = { signup, login, forget, reset, showUsers, getUser, deleteUser, updateUser, findUser }