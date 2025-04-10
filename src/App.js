import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">Cupid AI 💘</h1>
        <p className="mb-6 text-gray-700">
          Use the sliders below to simulate your profile and see who you’d attract.
        </p>

        {/* Placeholder for slider logic */}
        <div className="space-y-4">
          <label className="block">
            Age: <input type="range" min="18" max="60" className="w-full" />
          </label>
          <label className="block">
            Openness: <input type="range" min="0" max="100" className="w-full" />
          </label>
        </div>

        <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-xl transition">
          Predict Matches 💞
        </button>
      </div>
    </div>
  );
}

export default App;
