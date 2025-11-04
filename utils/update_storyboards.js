const fs = require('fs');

const storyboards = [
  {
    file: 'this_stock_crashed_40_percent_but.md',
    title: '"THIS STOCK CRASHED 40% BUT..."',
    slides: [
      {
        title: 'THE CRASH',
        content: `This stock
CRASHED 40%

┌─────────────┐
│   📉📉📉   │
│             │
│  -40% in    │
│  24 hours   │
│             │
│ [Red chart  │
│  plunging]  │
└─────────────┘

Yesterday 👀`
      },
      {
        title: 'PANIC SELLING',
        content: `Everyone's
SELLING

┌─────────────┐
│ Reddit:     │
│ "IT'S OVER"│
│             │
│ Twitter:    │
│ "DUMP IT"   │
│             │
│ CNBC:       │
│ "DISASTER" │
└─────────────┘

Mass panic`
      },
      {
        title: 'BUT SMART MONEY...',
        content: `Smart investors
saw THIS:

┌─────────────┐
│ BLOOM AI    │
│ ALERT       │
│ 2 WEEKS AGO │
│             │
│ ⚠️ Warning: │
│ Volatility  │
│ incoming    │
│             │
│ [Screenshot]│
└─────────────┘

They knew`
      },
      {
        title: 'THE OPPORTUNITY',
        content: `Now it's
UNDERVALUED

┌─────────────┐
│ P/E: 8x     │
│ (Was 15x)   │
│             │
│ Revenue: ✅ │
│ Growth: ✅  │
│             │
│ Smart money │
│ is BUYING   │
└─────────────┘

Your turn →`
      }
    ],
    hook: 'Stock crashes are opportunities if you see them coming',
    script: `[0-3s] HOOK:
"This stock crashed 40% yesterday. Reddit is panicking. But smart investors saw this coming."

[3-6s] THE PANIC:
"Look at Twitter. Look at Reddit. Everyone's dumping. CNBC is calling it a disaster. Retail investors are losing their minds."

[6-10s] THE PREDICTION:
"But Bloom AI sent an alert two weeks ago. Warned about short-term volatility. Predicted exactly this scenario. Smart money prepared."

[10-15s] THE OPPORTUNITY:
"Now it's trading at 8x earnings. Revenue's solid. Growth intact. The crash created a buying opportunity. Don't panic. Use AI. Link in bio."`,
    visuals: 'Red charts, panic headlines, calm AI alert, value metrics',
    potential: 'HIGH (Drama + Vindication + FOMO)'
  }
];

// I'll add more storyboards, but for now let me show you the pattern with one complete example

const template = (sb) => `╔════════════════════════════════════════════════════════════════════════════════╗
║                ${sb.title.padEnd(62)}║
╚════════════════════════════════════════════════════════════════════════════════╝

Duration: 12-16s  |  Hook Time: 0-3s  |  Expected Engagement: 500K+ views

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  SLIDE 1 (0-3s) │  │ SLIDE 2 (3-6s)  │  │ SLIDE 3 (6-10s) │  │SLIDE 4 (10-15s) │
├─────────────────┤  ├─────────────────┤  ├─────────────────┤  ├─────────────────┤
│                 │  │                 │  │                 │  │                 │
│ ${sb.slides[0].title.padEnd(15)} │  │ ${sb.slides[1].title.padEnd(15)} │  │ ${sb.slides[2].title.padEnd(15)} │  │ ${sb.slides[3].title.padEnd(15)} │
│                 │  │                 │  │                 │  │                 │
${sb.slides[0].content.split('\n').map((line, i) => `│ ${line.padEnd(15)} │`).slice(0, 13).join('  ')}
${sb.slides[1].content.split('\n').map((line, i) => `│ ${line.padEnd(15)} │`).slice(0, 13).join('  ')}
${sb.slides[2].content.split('\n').map((line, i) => `│ ${line.padEnd(15)} │`).slice(0, 13).join('  ')}
${sb.slides[3].content.split('\n').map((line, i) => `│ ${line.padEnd(15)} │`).slice(0, 13).join('  ')}
└─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCRIPT / VOICEOVER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${sb.script}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRODUCTION NOTES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VISUALS: ${sb.visuals}

MUSIC: Tense → dramatic → empowering

VIRAL POTENTIAL: ${sb.potential}

CTA: "Get ahead of market moves - Link in bio"
`;

storyboards.forEach(sb => {
  fs.writeFileSync(`content/${sb.file}`, template(sb));
  console.log(`Updated: ${sb.file}`);
});

console.log('\nDone with first batch!');
