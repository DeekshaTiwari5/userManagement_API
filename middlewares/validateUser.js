exports.validateUser = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || typeof name !== "string") {
    return res
      .status(400)
      .json({ error: "Name is required and must be a string" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Valid email is required" });
  }
  next();
};
