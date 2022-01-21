const Student = require('../models/studentSchema');
const Company = require('../models/companySchema');

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
    // filter out duplicate batches
    array = [...new Set(array)];

    return res.render('allocateInterview', { students, array });
  } catch (error) {
    console.log(`Error in allocating interview: ${error}`);
    return res.redirect('back');
  }
};

// schedule interview
module.exports.scheduleInterview = async function (req, res) {
  const { id, company, date } = req.body;
  try {
    const existingCompany = await Company.findOne({ name: company });
    const obj = {
      student: id,
      date,
      result: 'Pending',
    };
    // if company doesnt exist
    if (!existingCompany) {
      const newCompany = await Company.create({
        company,
      });
      newCompany.students.push(obj);
      newCompany.save();
    } else {
      for (let student of existingCompany.students) {
        // if student id already exists
        if (student.student._id === id) {
          console.log('Interview with this student already scheduled');
          return res.redirect('back');
        }
      }
      existingCompany.students.push(obj);
      existingCompany.save();
    }

    const student = await Student.findById(id);

    if (student) {
      const interview = {
        company,
        date,
        result: 'Pending',
      };
      student.interviews.push(interview);
      student.save();
    }
    console.log('Interview Scheduled Successfully');
    return res.redirect('/company/home');
  } catch (error) {
    console.log(`Error in scheduling Interview: ${error}`);
    return res.redirect('back');
  }
};
