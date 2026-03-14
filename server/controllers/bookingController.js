const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { name, email, phone, service, date, slot } = req.body;

    // Create new booking (bookingId is generated automatically by model default)
    const newBooking = new Booking({
      name,
      email,
      phone,
      service,
      date,
      slot
    });

    const savedBooking = await newBooking.save();

    res.status(201).json({
      success: true,
      message: "Booking successful",
      booking: savedBooking
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      message: "Failed to create booking",
      error: error.message
    });
  }
};
