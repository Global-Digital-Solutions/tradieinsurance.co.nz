const usps = [
  { icon: '🏆', title: 'Licensed Brokers', desc: 'Registered Financial Service Providers' },
  { icon: '🇳🇿', title: 'NZ Owned & Operated', desc: 'Local expertise, local knowledge' },
  { icon: '🛡️', title: 'Independent', desc: 'Not owned by an insurer' },
  { icon: '⚡', title: 'Broker Referral', desc: 'Matched to a specialist for your trade' },
]

export default function USPBar() {
  return (
    <div className="bg-gray-800 border-y border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {usps.map((u) => (
            <div key={u.title} className="flex items-center gap-3">
              <span className="text-2xl flex-shrink-0">{u.icon}</span>
              <div>
                <p className="text-white text-sm font-bold">{u.title}</p>
                <p className="text-gray-400 text-xs">{u.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
