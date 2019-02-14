const resumes = {};

resumes.get = (req, res) => {
  res.json({ page: "Resumes" });
};

module.exports = resumes;
