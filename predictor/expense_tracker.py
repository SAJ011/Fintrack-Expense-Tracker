from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from datetime import datetime
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
import numpy as np

app = Flask(__name__)
CORS(app)

def predict_expenses(data):
    df = pd.DataFrame(data)
    df = df[['createdAt', 'amount']].rename(columns={'createdAt': 'ds', 'amount': 'y'})
    df['ds'] = pd.to_datetime(df['ds'], errors='coerce')
    df.dropna(subset=['ds', 'y'], inplace=True)

    if df.empty or len(df) < 2:
        raise ValueError("At least 2 different days data are required.")

    # Group by date and sum expenses
    df = df.groupby(df['ds'].dt.date)['y'].sum().reset_index()
    df.rename(columns={'ds': 'ds', 'y': 'y'}, inplace=True)
    df['ds'] = pd.to_datetime(df['ds'])
    df.sort_values('ds', inplace=True)

    # ✅ Exclude today's data from training
    today = datetime.today().replace(hour=0, minute=0, second=0, microsecond=0)
    df = df[df['ds'] < today]

    if df.empty or len(df) < 2:
        raise ValueError("Not enough historical data (excluding today) to make prediction.")

    # Convert date to ordinal
    df['ds_ordinal'] = df['ds'].map(datetime.toordinal)

    # Fit polynomial regression model
    model = make_pipeline(PolynomialFeatures(degree=2), LinearRegression())
    X = df[['ds_ordinal']]
    y = df['y']
    model.fit(X, y)

    # Predict for today
    today_ordinal = np.array([[today.toordinal()]])
    predicted_expense = model.predict(today_ordinal)[0]

    return {
        "predicted_expense": round(predicted_expense, 2),
        "predicted_date": today.strftime('%Y-%m-%d')
    }

@app.route('/predict-expense', methods=['POST'])
def predict_expense_endpoint():
    try:
        incoming_data = request.get_json(force=True)
        result = predict_expenses(incoming_data)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
