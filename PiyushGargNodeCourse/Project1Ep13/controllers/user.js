const User = require('../models/user')

async function handleGetAllUsers(req, res) {
  const allDBUsers = await User.find({});
  const html = `
  <ul>
    ${allDBUsers
      .map(
        (user) =>
          `<li>${user.firstName} ${user.lastName} - ${user.email} - ${user.jobTitle} - ${user.gender}</li>`,
      )
      .join("")}    
    </ul>
    `;
  res.send(html);
}

async function handleGetUserByID(req, res) {
  const id = Number(req.params.id);
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const html = `
    <h1>${user.firstName} ${user.lastName}</h1>
    <p>Email: ${user.email}</p>
    <p>Job Title: ${user.jobTitle}</p>    
    <p>Gender: ${user.gender}</p>
  `;
  res.send(html);
}

async function handlePostUser(req, res) {
  const body = req.body;
  if (
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.jobTitle ||
    !body.gender
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    jobTitle: body.jobTitle,
    gender: body.gender,
  });

  return res.json({
    status: 201,
    message: "User created successfully",
    data: result,
  });
}

module.exports = { handleGetAllUsers, handleGetUserByID, handlePostUser };
