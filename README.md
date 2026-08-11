# FinTrack

A full-stack personal expense tracker with authentication, CRUD expense management, and a machine-learning-powered spend predictor.

## Features

- User sign up / sign in with JWT-based authentication
- Create, view, update, and delete personal expenses
- Per-user expense history (each user only sees their own data)
- Expense prediction: a polynomial regression model forecasts today's expected spend based on historical daily totals

## Tech stack

| Layer     | Tech |
|-----------|------|
| Frontend  | React, Tailwind CSS, Material UI |
| Backend   | Node.js, Express, Sequelize, MySQL |
| Predictor | Python, Flask, scikit-learn, pandas |
| Auth      | JWT, bcrypt |

## Project structure

```
FinTrack-SJ/
├── frontend/    # React app (Create React App)
├── backend/     # Express API + MySQL via Sequelize
└── predictor/   # Flask microservice for expense prediction
```

## Getting started

### Backend

```bash
cd backend
npm install
cp .env.example .env                       # fill in your own JWT secret
cp config/config.example.json config/config.json   # fill in your MySQL credentials
npm start
```
Runs on `http://localhost:3001`.

### Frontend

```bash
cd frontend
npm install
npm start
```
Runs on `http://localhost:3000`.

### Predictor

```bash
cd predictor
pip install -r requirements.txt
python expense_tracker.py
```
Exposes `POST /predict-expense`, which takes a list of `{ createdAt, amount }` records and returns a predicted spend for today.

## API overview

**Auth** (`/api`)
- Sign up / sign in endpoints returning a JWT

**Expenses** (`/expense`) — all require a valid JWT
- `POST /expense` — create an expense
- `GET /expense/:id` — get a single expense
- `PUT /expense/:id` — update an expense
- `DELETE /expense/:id` — delete an expense
- `GET /expense/user/me` — list the logged-in user's expenses

## Notes

- `backend/.env` and `backend/config/config.json` are gitignored — use the `.example` files as templates and never commit real credentials.
