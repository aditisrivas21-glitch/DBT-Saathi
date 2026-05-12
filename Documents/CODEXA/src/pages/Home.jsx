import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      icon: "📚",
      title: "Learn the Difference",
      desc: "Understand what Aadhaar-linked vs DBT-enabled actually means.",
      link: "/learn",
    },
    {
      icon: "✅",
      title: "Check Your Status",
      desc: "Take our quick quiz and find out if your account is DBT-ready.",
      link: "/quiz",
    },
    {
      icon: "🏦",
      title: "Step-by-Step Guide",
      desc: "Bank-wise instructions to activate your DBT seeding today.",
      link: "/guide",
    },
    {
      icon: "🤖",
      title: "Ask AI Saathi",
      desc: "Chat with our AI assistant for instant answers in Hindi & English.",
      link: "/chatbot",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Is Your Account{" "}
          <span className="text-brand-orange">DBT Ready?</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-blue-100">
          Thousands of students miss scholarships every year because they don't
          know the difference between an Aadhaar-linked and a DBT-enabled bank
          account. Don't be one of them.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/quiz"
            className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition"
          >

            
            Check My Status →
          </Link>
          <Link
            to="/learn"
            className="border-2 border-white hover:bg-white hover:text-brand-blue text-white font-bold px-8 py-3 rounded-full transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-orange-100 border-l-4 border-brand-orange px-6 py-4 text-center">
        <p className="text-orange-800 font-semibold">
          ⚠️ Just linking Aadhaar to your bank is NOT enough to receive
          scholarships. You must be DBT-enabled via NPCI.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-10">
          What DBT Saathi Helps You Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Link
              to={f.link}
              key={f.title}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 text-center"
            >
              <div className="text-5xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-bold text-brand-blue mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-brand-light py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "₹3000 Cr+", label: "Scholarships unclaimed yearly" },
            { value: "60%", label: "Students unaware of DBT seeding" },
            { value: "5 Steps", label: "All it takes to become DBT-ready" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-brand-orange">{s.value}</p>
              <p className="text-gray-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}