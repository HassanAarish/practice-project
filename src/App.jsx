import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import useNetworkStatus from "./pages/NetworkStatus";

const App = () => {
  const { isOnline } = useNetworkStatus();

  if (!isOnline) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 text-center">
        {/* Dinosaur Emoji with Bounce Animation */}
        <div className="text-9xl mb-4 animate-bounce">🦖</div>
        <div className="text-xl font-semibold mb-4">
          You are offline. Please check your internet connection.
        </div>

        {/* Try Again Button */}
        <button
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
