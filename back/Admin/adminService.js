const adminModel = require('../User/userModel');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
    const { nom, prenom, mail, numero, password } = req.body;


    let existingAdmin;
    try {
        existingAdmin = await adminModel.findOne({ mail: mail });
    } catch (err) {
        console.log(err);
    }
    if (existingAdmin) {
        return res
            .status(400)
            .json({ message: "Admin already exists! Login Instead" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    const admin = new adminModel({
        nom,
        prenom,
        mail,
        numero,
        role:1,
        password,
        password: hashedPassword,

    });
    try {
        await admin.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(201).json({ message: admin });
};

const login = async (req, res) => {
    data = req.body;
    mail = await adminModel.findOne({ mail: data.mail}) 
    payload = {
        _id: mail._id,
        mail: mail.mail,
        nom: mail.nom,
        role: mail.role
    }
    if (!mail && payload.role==0) {
         res.status(408).send('mail or password invalid!')
         console.log(payload.role)
    }else {
        validPass = bcrypt.compareSync(data.password, mail.password)
        if (!validPass) {
            res.status(401).send('mail or password invalid!')
        }else {
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

module.exports = { login,signup }