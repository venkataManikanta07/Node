// @desc Get all contacts
// @route GET /api/contacts
// @access Public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

// @desc create new contact
// @route POST /api/contacts
// @access Public 

const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create new contact" });
};

// @desc Get contact by ID
// @route GET /api/contacts/:id
// @access Public

const getContact = (req, res) => {
  res.status(201).json({ message: `Get contact by ID: ${req.params.id}` });
};

// @desc Update contact by ID
// @route PUT /api/contacts/:id
// @access Public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact by ID: ${req.params.id}` });
};

// @desc Delete contact by ID
// @route DELETE /api/contacts/:id
// @access Public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact by ID: ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
