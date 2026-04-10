const transactionService = require("../services/transactionService");

const { transactionSchema } = require("../utils/validators");

exports.createTransaction = async (req, res) => {
  try {
    const parsed = transactionSchema.parse(req.body);

    const data = await transactionService.createTransaction(
      parsed,
      req.user.id
    );

    res.status(201).json(data);
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({
        error: "Validation failed",
        details: error.errors
      });
    }

    res.status(400).json({ error: error.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const data = await transactionService.getTransactions(req.query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const data = await transactionService.updateTransaction(
      req.params.id,
      req.body,
      req.user
    );

    res.json(data);
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    await transactionService.deleteTransaction(
      req.params.id,
      req.user
    );

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
};