# Cupid AI 💘

Cupid AI is a playful, AI-powered dating app that helps users find their perfect match! 👫 Based on user-selected traits and sentiment analysis, Cupid AI uses machine learning models to predict compatibility, gauge emotional alignment, and give personalized match suggestions. Whether you're into adventures or quiet evenings, Cupid AI tailors your experience with fun vibes and insightful predictions.

Protoype Demo-
https://huggingface.co/spaces/rivapereira123/cupid-app

---

## 🚀 Features

- **Interactive Quiz**: Answer a series of fun questions to reveal your preferences. Get personalized match suggestions based on traits you select. 🌟
- **Compatibility Prediction**: Powered by machine learning models, Cupid AI matches you with profiles based on your traits and preferences. 💑
- **Sentiment Analysis**: Understand the emotional alignment between you and your matches, analyzed through AI! 💖
- **Match Suggestions**: See detailed profiles with match scores and reasons based on your selected traits. 🔥
- **Vibe Profiles**: Choose from various vibe profiles (Romantic, Adventurous, Tech-Savvy) to see who matches your personality. 🎨
- **Swipe Right**: Like profiles and get real-time feedback with swiping functionality. 📲

---

## 🔧 Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: FastAPI, Python, Hugging Face (Sentiment Analysis Model), XGBoost (Compatibility Model)
- **Machine Learning Models**: Compatibility prediction & sentiment analysis
- **Database**: (Insert database name if applicable, e.g., PostgreSQL)

---

## 📝 Installation

### Clone the Repository

### Deploying backend locally
## Create a virtual enviourment 
`python3 -m venv venv`

## Activate Virtual Enviourment
`.\venv\Scripts\activate`

## Install backend dependencies
`pip install -r requirements.txt`

## Run Backend Server
`uvicorn app.main:app --reload`

### Open new Terminal for Front End

## Install front end dependencies 
`npm install`

## Run frontend development server
`npm run dev`

### How it Works 

User Profile Setup: Users can enter their preferences (traits like "Romantic," "Adventurous," etc.) and answer a series of quiz questions that help Cupid AI understand their personality.

Model Predictions: The backend uses an XGBoost model for compatibility prediction and a Hugging Face sentiment analysis model to understand the emotional tone in the user’s responses. These models calculate the compatibility score and sentiment alignment for each user.

Matchmaking: Based on the results, users get match suggestions with personalized recommendations. Cupid AI presents this data through interactive swipe cards using React.

Emotional AI: Sentiment analysis helps analyze not just compatibility but also emotional tone, ensuring the matches are more than just compatible—they are emotionally aligned!

### 🧠 Machine Learning Models
Compatibility Prediction Model
Cupid AI uses a machine learning model built with XGBoost to predict compatibility based on user preferences. The model takes into account the traits chosen by users and outputs a compatibility score.

Sentiment Analysis Model
The sentiment analysis model, fine-tuned using Hugging Face, analyzes user essays or responses to determine the emotional tone. It helps determine how emotionally aligned two profiles are.

### 📄 License
Cupid AI is open-source! Feel free to contribute, raise issues, or suggest improvements.

### 🤝 Contributing
Contributions are always welcome! Please fork the repository, create a branch for your feature, and submit a pull request. But also if you do so, please follow my github repos and star it-! It would help for future projects like this 

### ✨ Future Improvements
After the live demo, i am considering working on this more after the hackathon and refining it. This would scale better as an app on a phone rather then on laptop. So i think i would have another go on it
Integration of more complex AI models for deeper personality analysis.
Expanded user interaction options (more quizzes, mood updates, etc.).
Implementing deeper machine learning techniques for better match prediction.



