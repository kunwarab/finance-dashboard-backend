const prisma = require("../config/prisma");

exports.createTransaction = async (body, userId) => {
  const { amount, type, category, date, notes } = body;

  if (!amount || !type || !category || !date) {
    throw new Error("Missing required fields");
  }

  return prisma.transaction.create({
    data: {
      amount: Number(amount),
      type,
      category,
      date: new Date(date),
      notes,
      userId
    }
  });
};

exports.getTransactions = async (query) => {
  const { type, category, startDate, endDate, page = 1, limit = 10 } = query;

  const filters = {};

  if (type) filters.type = type;
  if (category) filters.category = category;

  if (startDate || endDate) {
    filters.date = {};
    if (startDate) filters.date.gte = new Date(startDate);
    if (endDate) filters.date.lte = new Date(endDate);
  }

  const pageNumber = Number(page);
  const pageSize = Number(limit);
  const skip = (pageNumber - 1) * pageSize;

  const transactions = await prisma.transaction.findMany({
    where: filters,
    skip,
    take: pageSize,
    orderBy: { date: "desc" }
  });

  const total = await prisma.transaction.count({ where: filters });

  return {
    data: transactions,
    meta: {
      total,
      page: pageNumber,
      limit: pageSize,
      totalPages: Math.ceil(total / pageSize)
    }
  };
};

exports.updateTransaction = async (id, body, user) => {
  const existing = await prisma.transaction.findUnique({
    where: { id }
  });

  if (!existing) {
    throw new Error("Transaction not found");
  }

  // Only owner OR admin
  if (existing.userId !== user.id && user.role !== "ADMIN") {
    throw new Error("Not authorized");
  }

  return prisma.transaction.update({
    where: { id },
    data: {
      ...body,
      date: body.date ? new Date(body.date) : undefined
    }
  });
};

exports.deleteTransaction = async (id, user) => {
  const existing = await prisma.transaction.findUnique({
    where: { id }
  });

  if (!existing) throw new Error("Not found");

  if (existing.userId !== user.id && user.role !== "ADMIN") {
    throw new Error("Not authorized");
  }

  return prisma.transaction.delete({
    where: { id }
  });
};