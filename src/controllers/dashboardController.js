const dashboardService = require("../services/dashboardService");

exports.getSummary = async (req, res) => {
  try {
    const data = await dashboardService.getSummary(req.user);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategoryBreakdown = async (req, res) => {
  try {
    const data = await dashboardService.getCategoryBreakdown(req.user);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTrends = async (req, res) => {
  try {
    const data = await dashboardService.getTrends(req.user);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};