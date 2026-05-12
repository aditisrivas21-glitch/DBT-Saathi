import { useState } from "react";

export default function StepGuide() {
  const [selectedBank, setSelectedBank] = useState("SBI");

  const guides = {
    SBI: [
      "Visit SBI branch",
      "Ask for DBT/NPCI seeding form",
      "Submit Aadhaar photocopy",
      "Request NPCI activation",
      "Wait for SMS confirmation",
    ],

    PNB: [
      "Go to nearest PNB branch",
      "Fill Aadhaar seeding form",
      "Verify mobile number",
      "Request DBT enablement",
      "Check NPCI status after 24 hrs",
    ],

    "Bank of Baroda": [
      "Visit branch or use net banking",
      "Link Aadhaar with account",
      "Request NPCI mapper update",
      "Submit verification",
      "Wait 24-48 hours",
    ],

    Canara: [
      "Visit Canara branch",
      "Fill DBT form",
      "Provide Aadhaar copy",
      "Verify bank details",
      "Receive DBT activation SMS",
    ],
  };

  const banks = Object.keys(guides);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-brand-blue mb-4">
          DBT Activation Guide
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Select your bank and follow the exact steps to activate DBT and receive scholarships smoothly.
        </p>
      </div>

      {/* Bank Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {banks.map((bank) => (
          <button
            key={bank}
            onClick={() => setSelectedBank(bank)}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
              selectedBank === bank
                ? "bg-brand-orange text-white scale-105 shadow-lg"
                : "bg-white text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white"
            }`}
          >
            {bank}
          </button>
        ))}
      </div>

      {/* Steps */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-brand-orange mb-8 text-center">
            {selectedBank} DBT Process
          </h2>

          <div className="space-y-6">
            {guides[selectedBank].map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-blue-50 p-5 rounded-2xl hover:scale-[1.02] transition"
              >
                <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow">
                  {index + 1}
                </div>

                <p className="text-gray-700 text-lg font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-orange-100 border-l-8 border-brand-orange rounded-2xl p-6 shadow">
          <h3 className="text-2xl font-bold text-orange-700 mb-3">
            ⚠ Important Reminder
          </h3>

          <p className="text-orange-800 text-lg">
            Linking Aadhaar is NOT enough. Your bank must also update your details
            in the NPCI Aadhaar Mapper for DBT benefits and scholarships to work.
          </p>
        </div>
      </div>
    </div>
  );
}