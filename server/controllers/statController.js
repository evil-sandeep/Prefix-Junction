const Stat = require('../models/Stat');

exports.getStats = async (req, res) => {
  try {
    let stats = await Stat.findOne({ isSingleton: true });
    
    // Auto-initialize if not exists
    if (!stats) {
      stats = new Stat({ isSingleton: true });
      await stats.save();
    }

    res.status(200).json({
      success: true,
      stats
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch statistics",
      error: error.message
    });
  }
};

exports.updateStat = async (req, res) => {
  try {
    const { field, action } = req.body; // field: 'happyPets', action: 'increment' | 'decrement'
    
    let stats = await Stat.findOne({ isSingleton: true });
    if (!stats) {
      stats = new Stat({ isSingleton: true });
    }

    if (action === 'increment') {
      if (typeof stats[field] === 'number') {
        stats[field] += 1;
      }
    } else if (action === 'decrement') {
      if (typeof stats[field] === 'number' && stats[field] > 0) {
        stats[field] -= 1;
      }
    }

    await stats.save();

    res.status(200).json({
      success: true,
      message: `${field} updated`,
      stats
    });
  } catch (error) {
    console.error('Error updating stat:', error);
    res.status(500).json({
      success: false,
      message: "Failed to update statistic",
      error: error.message
    });
  }
};
