const { z } = require("zod");

exports.transactionSchema = z.object({
  amount: z.number().positive(),
  type: z.enum(["INCOME", "EXPENSE"]),
  category: z.string().min(1),
  date: z.string(),
  notes: z.string().optional()
});