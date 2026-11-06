import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Mariam Ali — Product Designer';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

// Link preview shown on LinkedIn, WhatsApp, X and Slack.
export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#f7f7f4',
          color: '#141414',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28, color: '#5c5c57' }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: '#22a06b' }} />
          Available for work
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>Mariam Ali</div>
          <div style={{ fontSize: 44, color: '#5c5c57' }}>Product Designer · SaaS, e-commerce & dashboards</div>
        </div>
        <div style={{ display: 'flex', gap: 14, fontSize: 26 }}>
          {['Saudi Arabia', 'Egypt', 'United States', 'Arabic-first RTL'].map((x) => (
            <div key={x} style={{ padding: '10px 22px', borderRadius: 999, background: 'rgba(31,111,92,0.1)', color: '#1f6f5c' }}>
              {x}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
