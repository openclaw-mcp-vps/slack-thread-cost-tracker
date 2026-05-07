import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slack Thread Cost Tracker — Track Billable Hours in Slack',
  description: 'Automatically track time spent in Slack threads and convert to billable hour reports. Built for freelance consultants billing $50–200/hour.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5c3cdcc0-59b3-45c0-883a-e611fcd94bdf"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
