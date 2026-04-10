const prisma = require("../config/prisma");

//Total Income + Expense + Balance
exports.getSummary = async (user) => {
  const income = await prisma.transaction.aggregate({
    _sum: { amount: true },
    where: {
      type: "INCOME",
      userId: user.id
    }
  });

  const expense = await prisma.transaction.aggregate({
    _sum: { amount: true },
    where: {
      type: "EXPENSE",
      userId: user.id
    }
  });

  const totalIncome = income._sum.amount || 0;
  const totalExpense = expense._sum.amount || 0;

  return {
    income: totalIncome,
    expense: totalExpense,
    balance: totalIncome - totalExpense
  };
};

//Group by category
exports.getCategoryBreakdown = async (user) => {
  return prisma.transaction.groupBy({
    by: ["category", "type"],
    where: {
      userId: user.id
    },
    _sum: {
      amount: true
    }
  });
};

//Trends over time (e.g. monthly)
exports.getTrends = async (user) => {
  const transactions = await prisma.transaction.findMany({
    where: {
      userId: user.id
    },
    orderBy: { date: "asc" }
  });

  const trends = {};

  transactions.forEach((t) => {
    const month = new Date(t.date).toISOString().slice(0, 7);

    if (!trends[month]) {
      trends[month] = { income: 0, expense: 0 };
    }

    if (t.type === "INCOME") {
      trends[month].income += t.amount;
    } else {
      trends[month].expense += t.amount;
    }
  });

  return trends;
};