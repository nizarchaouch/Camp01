const destModel = require('./destModel');

const multer = require('multer');
filename = ""

const mystorage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, redirect) => {
    let date = new Date.now();
    let fl = date + '.' + file.mimetype.split('/')[1];
    redirect(null, fl);
    filename = fl;
  }
})

var add = async (req, res) => {
  const { title,subtitle, description, image, map } = req.body;

  let existingdest;
  try {
    dest.image = filename;
    existingdest = await destModel.findOne({ title: title });
    filename = "";
  } catch (err) {
    console.log(err);
  }
  if (existingdest) {
    return res
      .status(400)
      .json({ message: "La destination existe déjà!!" });
  }
  const dest = new destModel({
    title,
    subtitle,
    description,
    image,
    map,
  });
  try {
    await dest.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(201).json({ message: dest });
};


const deleteDest = async (req, res) => {
  try {
    const destToDelete = await destModel.findById(req.params.id, 'title');
    if (!destToDelete) {
      return res.status(404).json({ message: ERROR_MESSAGES.USER_NOT_FOUND });
    }
    await destModel.findByIdAndDelete(req.params.id);
    const docs = await destModel.find({});
    res.status(200).json({ message: `Destination ${destToDelete.title} is deleted!`, docs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

const updateDest = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedDest = await destModel.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
      new: true, // pour renvoyer le document mis à jour plutôt que l'ancien document
    });
    if (!updatedDest) {
      return res.status(404).json({ message: ERROR_MESSAGES.USER_NOT_FOUND });
    }
    res.json(updatedDest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

const getDest = async (req, res) => {
  const dest = await destModel.findOne({
    _id: req.params.id
  }).then((dest) => {
    res.status(200).json(dest);
  }).catch((error) => {
    res.status(500).json({ error: error });
  });

}




module.exports = { add, deleteDest, updateDest, getDest }