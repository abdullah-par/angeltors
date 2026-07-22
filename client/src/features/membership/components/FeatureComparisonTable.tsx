import { Check } from 'lucide-react';

export default function FeatureComparisonTable() {
  const comparisonData = [
    { name: 'Profile Directory Access', checks: [true, true, true, true] },
    { name: '1-on-1 Consultation', checks: [true, true, false, false] },
    { name: 'Pitch Deck Creation', checks: [false, true, false, false] },
    { name: 'Investor Matchmaking', checks: [false, true, false, false] },
    { name: 'Curated Deal Flow', checks: [false, false, true, false] },
    { name: 'Charge Consultation Fees', checks: [false, false, false, true] },
    { name: 'Access to Pitch Events', checks: [false, true, true, false] },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 bg-slate-50 text-angeltors-ink hidden md:block">
      <div className="max-w-[85rem] mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Compare Memberships</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm border border-slate-200/60">
            <thead>
              <tr>
                <th className="py-6 px-6 border-b border-slate-200/60 w-1/3 text-slate-500 font-bold uppercase tracking-wider text-sm">Feature</th>
                <th className="py-6 px-6 border-b border-slate-200/60 text-angeltors-ink font-bold">Freemium</th>
                <th className="py-6 px-6 border-b border-slate-200/60 text-angeltors-accent font-bold">Startup</th>
                <th className="py-6 px-6 border-b border-slate-200/60 text-angeltors-ink font-bold">Investor</th>
                <th className="py-6 px-6 border-b border-slate-200/60 text-angeltors-ink font-bold">Mentor</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-slate-700">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 border-b border-slate-100 text-angeltors-ink">{row.name}</td>
                  {row.checks.map((hasFeature, j) => (
                    <td key={j} className="py-5 px-6 border-b border-slate-100">
                      {hasFeature ? (
                        <Check className={`w-5 h-5 ${j === 1 ? 'text-angeltors-accent' : 'text-slate-400'}`} />
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
