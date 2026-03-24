const Booking = require('../models/Booking');
const Stat = require('../models/Stat');

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
    const bookings = await Booking.find().sort({ createdAt: 1 });
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

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ 
      email: { $regex: new RegExp(`^${req.user.email}$`, 'i') } 
    }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings
    });
  } catch (error) {
    console.error('Error fetching my bookings:', error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch your bookings",
      error: error.message
    });
  }
};
exports.updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    // If marked as completed, increment stats
    if (status === 'completed') {
      try {
        await Stat.findOneAndUpdate(
          { isSingleton: true },
          { $inc: { happyPets: 1 } },
          { upsert: true }
        );
      } catch (statError) {
        console.error('Error auto-incrementing stats:', statError);
        // We don't fail the booking update if stats update fails, 
        // but we log it.
      }
    }

    res.status(200).json({
      success: true,
      message: `Booking status updated to ${status}`,
      booking: updatedBooking
    });
  } catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({
      success: false,
      message: "Failed to update booking status",
      error: error.message
    });
  }
};
