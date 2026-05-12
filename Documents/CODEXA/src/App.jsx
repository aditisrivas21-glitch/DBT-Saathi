import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LearnDifference from "./pages/LearnDifference";
import Quiz from "./pages/Quiz";
import StepGuide from "./pages/StepGuide";
import Chatbot from "./pages/Chatbot";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<LearnDifference />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/guide" element={<StepGuide />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}