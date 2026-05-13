export default function LearnDifference() {
  const rows = [
    ["Aadhaar stored in bank records", "✅ Yes", "✅ Yes"],
    ["Registered on NPCI Aadhaar Mapper", "❌ No", "✅ Yes"],
    ["Eligible for DBT / Subsidies", "❌ No", "✅ Yes"],
    ["Scholarships auto-credited", "❌ No", "✅ Yes"],
    ["LPG / PMJDY Benefits", "❌ No", "✅ Yes"],
    ["Purpose", "KYC / Identity only", "Welfare benefit delivery"],
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-blue text-center mb-2">
        Learn the Difference
      </h1>
      <p className="text-center text-gray-500 mb-10">
        Understanding this can save you thousands in missed scholarships.
      </p>

      {/* Flow Diagram */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
        {[
          { label: "Aadhaar Linked", color: "bg-yellow-100 border-yellow-400", icon: "🔗" },
          { label: "≠", color: "", icon: "" },
          { label: "DBT Enabled", color: "bg-green-100 border-green-400", icon: "✅" },
        ].map((item, i) =>
          item.label === "≠" ? (
            <span key={i} className="text-4xl font-bold text-red-500">
              ≠
            </span>
          ) : (
            <div
              key={i}
              className={`${item.color} border-2 rounded-2xl px-8 py-6 text-center w-48`}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="font-bold text-gray-800">{item.label}</p>
            </div>
          )
        )}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-2xl shadow">
        <table className="w-full text-left">
          <thead className="bg-brand-blue text-white">
            <tr>
              <th className="px-6 py-4">Feature</th>
              <th className="px-6 py-4">Aadhaar Linked</th>
              <th className="px-6 py-4">DBT Enabled (Seeded)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}
              >
                {row.map((cell, j) => (
                  <td key={j} className="px-6 py-4 text-gray-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key Takeaway */}
      <div className="mt-10 bg-orange-50 border-l-4 border-brand-orange rounded-xl p-6">
        <h3 className="text-lg font-bold text-orange-800 mb-2">
          🔑 Key Takeaway
        </h3>
        <p className="text-orange-700">
          When you link Aadhaar at a bank branch, the bank updates its internal
          records. But for DBT, your Aadhaar must also be registered on the{" "}
          <strong>NPCI Aadhaar Mapper</strong> — this is a separate step that
          most students miss. Without this, no scholarship or subsidy will reach
          your account.
          
        </p>
      </div>
    </div>
  );
}