const Student = require('../models/studentSchema');

// render create student page
module.exports.createStudentPage = async function (req, res) {
  return res.render('add_student');
};

// create student
module.exports.createStudent = async function (req, res) {
  const {
    name,
    email,
    batch,
    college,
    placement,
    contactNumber,
    dsa,
    webd,
    react,
  } = req.body;
  try {
    const student = await Student.findOne({ email });

    if (student) {
      console.log('Email already exists');
      return res.redirect('back');
    }

    const newStudent = await Student.create({
      name,
      email,
      college,
      batch,
      placement,
      contactNumber,
      dsa,
      webd,
      react,
    });
    await newStudent.save();

    return res.redirect('/');
  } catch (error) {
    console.log(`Error in creating student: ${error}`);
    return res.redirect('back');
  }
};
