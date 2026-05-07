export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Freelancer Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Billable Hours<br />Inside Slack Threads
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop losing money on unbilled Slack time. Our app monitors your thread activity in real time, converts it to billable hour reports, and lets you export invoices in one click.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['Real-time thread tracking','Billable hour reports','Slack webhook integration','CSV & PDF export','Per-client categorization'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#6e7681] text-sm mb-6">per month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited Slack workspaces',
              'Automatic thread time tracking',
              'Billable hour dashboard',
              'Client & project tagging',
              'CSV and PDF invoice export',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does the Slack integration work?</h3>
            <p className="text-[#8b949e] text-sm">You install our Slack app into your workspace. It uses Slack's Events API to capture when you send or reply to messages in threads, automatically logging timestamps so we can calculate time spent per conversation.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">Can I edit or adjust tracked time entries?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Every time entry appears in your dashboard where you can edit durations, assign clients, add notes, and mark entries as billable or non-billable before exporting your report.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">What export formats are supported?</h3>
            <p className="text-[#8b949e] text-sm">You can export your billable hour reports as CSV for spreadsheets or as a formatted PDF invoice ready to send directly to clients.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Slack Thread Cost Tracker. All rights reserved.
      </footer>
    </main>
  )
}
