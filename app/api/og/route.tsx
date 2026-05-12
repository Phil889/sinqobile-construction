import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

const BRAND_YELLOW = '#FFD600'
const BRAND_DARK = '#1a1a1a'

/**
 * Dynamic OG image generator
 *
 * Examples:
 *   /api/og?title=Kitchen+Renovations&subtitle=Johannesburg+%26+Sandton
 *   /api/og?title=Cost+of+Building+a+House&type=blog
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const title = searchParams.get('title') ?? 'Sinqobile Construction'
  const subtitle =
    searchParams.get('subtitle') ?? 'NHBRC Registered Builders · Johannesburg & Gauteng'
  const type = searchParams.get('type') ?? 'default'
  const badge = searchParams.get('badge') ?? 'NHBRC Registered'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: `linear-gradient(135deg, ${BRAND_DARK} 0%, #2a2a2a 100%)`,
          color: 'white',
          padding: '60px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top-right gradient accent */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: `radial-gradient(circle, ${BRAND_YELLOW}40 0%, transparent 70%)`,
          }}
        />

        {/* Brand + badge row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              borderRadius: '12px',
              background: BRAND_YELLOW,
              color: BRAND_DARK,
              fontSize: '32px',
              fontWeight: 800,
            }}
          >
            S
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Sinqobile Construction
            </span>
            <span style={{ fontSize: '16px', color: '#aaa' }}>sinqobileconstruction.co.za</span>
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            flex: 1,
            justifyContent: 'center',
            maxWidth: '900px',
          }}
        >
          {type === 'blog' && (
            <span
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: BRAND_YELLOW,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Blog Article
            </span>
          )}
          <h1
            style={{
              fontSize: title.length > 60 ? '52px' : '64px',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: '24px', color: '#ccc', margin: 0, lineHeight: 1.4 }}>{subtitle}</p>
        </div>

        {/* Bottom credentials bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '32px',
            borderTop: '2px solid rgba(255, 214, 0, 0.3)',
          }}
        >
          <div style={{ display: 'flex', gap: '24px' }}>
            <Badge text={badge} />
            <Badge text="15+ Years" />
            <Badge text="500+ Projects" />
            <Badge text="4.9★ (127 reviews)" />
          </div>
          <span style={{ fontSize: '20px', color: BRAND_YELLOW, fontWeight: 600 }}>
            082 868 8396
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

function Badge({ text }: { text: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        borderRadius: '999px',
        background: 'rgba(255, 214, 0, 0.1)',
        border: '1px solid rgba(255, 214, 0, 0.3)',
        color: '#FFD600',
        fontSize: '16px',
        fontWeight: 600,
      }}
    >
      {text}
    </div>
  )
}
