const Service = require("../models/Service");

exports.createService = async (req, res) => {
  try {
    const { title, description, category, price } = req.body;

    const service = await Service.create({
      title,
      description,
      category,
      price,
      provider: req.user.userId,
    });

    res.status(201).json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find().populate("provider", "name");
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
