const Student = require('../models/studentSchema');

// render company page
module.exports.companyPage = async function (req, res) {
  try {
    const students = await Student.find({});
    return res.render('company', { students });
  } catch (error) {
    console.log(`Error in rendering page: ${error}`);
    return res.redirect('back');
  }
};

// allocate interview

module.exports.allocateInterview = async function (req, res) {
  try {
    const students = await Student.find({});

    let array = [];

    for (let student of students) {
      array.push(student.batch);
    }
    array = [...new Set(array)];

    return res.render('allocateInterview', { students, array });
  } catch (error) {
    console.log(`Error in allocating interview: ${error}`);
    return res.redirect('back');
  }
};
