const express = require('express');
const { expense } = require('../models');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

class ExpenseRouter {
  constructor() {
    router.post('/', authenticateToken, this.createExpense);
    router.get('/:id', authenticateToken, this.getExpenseById);
    router.put('/:id', authenticateToken, this.updateExpense);
    router.delete('/:id', authenticateToken, this.deleteExpense);
    router.get('/user/me', authenticateToken, this.getExpensesForLoggedInUser);
  }

  async createExpense(req, res) {
    try {
      const { text, amount } = req.body;
      const userId = req.user.id;

      if (!text || amount === undefined) {
        return res.status(400).json({ error: 'Text and amount are required' });
      }

      const newExpense = await expense.create({ text, amount, userId });
      res.status(201).json(newExpense);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getExpenseById(req, res) {
    try {
      const { id } = req.params;
      const foundExpense = await expense.findByPk(id);

      if (!foundExpense) return res.status(404).json({ error: 'Expense not found' });
      if (foundExpense.userId !== req.user.id)
        return res.status(403).json({ error: 'Access denied' });

      res.json(foundExpense);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateExpense(req, res) {
    try {
      const { id } = req.params;
      const { text, amount } = req.body;

      const expenseToUpdate = await expense.findByPk(id);
      if (!expenseToUpdate) return res.status(404).json({ error: 'Expense not found' });

      if (expenseToUpdate.userId !== req.user.id)
        return res.status(403).json({ error: 'Access denied' });

      await expenseToUpdate.update({ text, amount });
      res.json(expenseToUpdate);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteExpense(req, res) {
    try {
      const { id } = req.params;
      const expenseToDelete = await expense.findByPk(id);

      if (!expenseToDelete) return res.status(404).json({ error: 'Expense not found' });
      if (expenseToDelete.userId !== req.user.id)
        return res.status(403).json({ error: 'Access denied' });

      await expenseToDelete.destroy();
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getExpensesForLoggedInUser(req, res) {
    try {
      const userId = req.user.id;
      const expenses = await expense.findAll({ where: { userId } });
      res.json(expenses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

new ExpenseRouter();
module.exports = router;
