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

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error: error.message
    });
  }
};
