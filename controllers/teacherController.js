const userModel = require('../models/user');
const classModel = require('../models/class');
const assignmentModel = require('../models/assignment');

module.exports.profile = async function(req,res){
  let teacher = await userModel.findById(req.user.userid).populate("classes");
  res.render('profile',{teacher});
};

module.exports.createClass = async function(req, res) {
  try {
    const { name, description } = req.body;
    const teacherId = req.user.userid;

    const newClass = await classModel.create({
      name,
      description,
      teacher: teacherId
    });

    await userModel.findByIdAndUpdate(
      teacherId,
      { $push: { classes: newClass._id } }
    );

    res.status(201).json({ message: 'Class created successfully', class: newClass });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.uploadassignment = async function(req, res) {
  try {
    const { title, description, due_date, classroom } = req.body;
    const teacherId = req.user.userid;

    // Check if classroom exists and belongs to teacher
    const classroomDoc = await classModel.findOne({ _id: classroom, teacher: teacherId });
    if (!classroomDoc) {
      return res.status(404).json({ error: 'Classroom not found or not authorized' });
    }

    // Create assignment
    const assignment = await assignmentModel.create({
      title,
      description,
      due_date,
      classroom,
      uploadedBy: teacherId
    });

    // Push assignment to classroom's assignments array
    classroomDoc.assignments.push(assignment._id);
    await classroomDoc.save();

    res.status(201).json({ message: 'Assignment uploaded successfully', assignment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};