import { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    q: "Have you linked your Aadhaar number to your bank account?",
    hint: "Done at the bank branch or via net banking",
  },
  {
    q: "Did the bank give you a confirmation that your account is DBT-enabled?",
    hint: "This is different from a regular Aadhaar linking confirmation",
  },
  {
    q: "Have you checked your NPCI Aadhaar seeding status online?",
    hint: "Via NPCI website or your bank's portal",
  },
  {
    q: "Have you successfully received any government scholarship or subsidy in this account?",
    hint: "NSP, state scholarship, LPG subsidy, etc.",
  },
  {
    q: "Does your bank account show as 'active' and 'verified' on the National Scholarship Portal?",
    hint: "You can check on scholarships.gov.in",
  },
];

export default function Quiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const score = answers.filter((a) => a === "yes").length;

  const getResult = () => {
    if (score === 5) return { label: "Fully DBT Ready ✅", color: "text-green-600", msg: "Great! Your account is fully set up to receive government benefits." };
    if (score >= 3) return { label: "Partially Ready ⚠️", color: "text-yellow-600", msg: "You're close! Check the step guide to complete your DBT activation." };
    return { label: "Not DBT Ready ❌", color: "text-red-600", msg: "Don't worry! Follow our step-by-step guide to get DBT-enabled today." };
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-blue text-center mb-2">
        DBT Readiness Quiz
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Answer 5 quick questions to check your status
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div
          className="bg-brand-orange h-2 rounded-full transition-all"
          style={{
            width: `${(answers.filter((a) => a !== null).length / questions.length) * 100}%`,
          }}
        />
      </div>

      {!submitted ? (
        <div className="space-y-6">
          {questions.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-6">
              <p className="font-semibold text-gray-800 mb-1">
                Q{i + 1}. {item.q}
              </p>
              <p className="text-xs text-gray-400 mb-4">💡 {item.hint}</p>
              <div className="flex gap-4">
                {["yes", "no"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      const updated = [...answers];
                      updated[i] = opt;
                      setAnswers(updated);
                    }}
                    className={`flex-1 py-2 rounded-xl font-semibold border-2 transition ${
                      answers[i] === opt
                        ? opt === "yes"
                          ? "bg-green-500 text-white border-green-500"
                          : "bg-red-400 text-white border-red-400"
                        : "border-gray-300 text-gray-600 hover:border-brand-blue"
                    }`}
                  >
                    {opt === "yes" ? "✅ Yes" : "❌ No"}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            disabled={answers.includes(null)}
            onClick={() => setSubmitted(true)}
            className="w-full bg-brand-blue text-white font-bold py-3 rounded-full hover:bg-blue-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Submit Quiz →
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <p className="text-5xl mb-4">
            {score === 5 ? "🎉" : score >= 3 ? "⚠️" : "❗"}
          </p>
          <h2 className={`text-2xl font-bold mb-2 ${getResult().color}`}>
            {getResult().label}
          </h2>
          <p className="text-gray-500 mb-6">{getResult().msg}</p>
          <p className="text-4xl font-bold text-brand-blue mb-6">
            {score} / {questions.length}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/guide"
              className="bg-brand-orange text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition"
            >
              View Step Guide →
            </Link>
            <button
              onClick={() => { setAnswers(Array(questions.length).fill(null)); setSubmitted(false); }}
              className="border-2 border-brand-blue text-brand-blue font-bold px-6 py-3 rounded-full hover:bg-brand-blue hover:text-white transition"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}