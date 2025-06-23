const Booking = require("../models/Booking");

exports.bookService = async (req, res) => {
  try {
    const { serviceId, bookingDate, address } = req.body;

    const booking = await Booking.create({
      user: req.user.userId,
      service: serviceId,
      bookingDate,
      address,
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.userId })
      .populate("service", "title")
      .populate("user", "name");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// 🆕 Function Added in Week 3
exports.updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate("service", "title");

    if (!booking) return res.status(404).json({ message: "Booking not found" });

    res.json({ message: "Status updated", booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
