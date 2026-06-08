import { useEffect, useRef } from 'react';

const ANNOTATIONS = [
  { x1: 10, y1: 8,   x2: 310, y2: 8,   label: '1400px', labelX: 160, labelY: 5,  axis: 'h' },
  { x1: 8,  y1: 10,  x2: 8,   y2: 190, label: '100vh',  labelX: 2,   labelY: 100, axis: 'v' },
  { x1: 10, y1: 36,  x2: 100, y2: 36,  label: '72px',   labelX: 55,  labelY: 33, axis: 'h' },
];

const SHAPES = [
  // browser outer
  { x: 10, y: 10, w: 300, h: 180, delay: 0 },
  // nav bar
  { x: 10, y: 10, w: 300, h: 22, delay: 0.4 },
  // hero
  { x: 10, y: 35, w: 300, h: 70, delay: 0.8 },
  // hero headline block
  { x: 22, y: 48, w: 120, h: 10, delay: 1.2 },
  { x: 22, y: 62, w: 80,  h: 6,  delay: 1.5 },
  // hero cta
  { x: 22, y: 74, w: 36, h: 12, delay: 1.7 },
  // col 1
  { x: 10, y: 110, w: 92, h: 70, delay: 2.1 },
  // col 2
  { x: 114, y: 110, w: 92, h: 70, delay: 2.4 },
  // col 3
  { x: 218, y: 110, w: 92, h: 70, delay: 2.7 },
  // col inner lines
  { x: 22, y: 122, w: 68, h: 6,  delay: 3.0 },
  { x: 22, y: 132, w: 50, h: 4,  delay: 3.1 },
  { x: 126, y: 122, w: 68, h: 6, delay: 3.0 },
  { x: 126, y: 132, w: 50, h: 4, delay: 3.1 },
  { x: 230, y: 122, w: 68, h: 6, delay: 3.0 },
  { x: 230, y: 132, w: 50, h: 4, delay: 3.1 },
];

function perimeter(w, h) {
  return 2 * (w + h);
}

export default function ComingSoon() {
  const svgRef = useRef(null);

  useEffect(() => {
    const rects = svgRef.current?.querySelectorAll('.bp-rect');
    rects?.forEach(r => {
      const len = parseFloat(r.getAttribute('data-perim'));
      r.style.strokeDasharray = len;
      r.style.strokeDashoffset = len;
    });
  }, []);

  return (
    <div style={styles.page}>
      {/* Blueprint grid — two layers via CSS background */}
      <div style={styles.grid} />

      {/* Corner crosshairs */}
      <div style={{ ...styles.crosshair, top: 24, left: 24 }} />
      <div style={{ ...styles.crosshair, top: 24, right: 24, transform: 'rotate(90deg)' }} />
      <div style={{ ...styles.crosshair, bottom: 24, left: 24, transform: 'rotate(270deg)' }} />
      <div style={{ ...styles.crosshair, bottom: 24, right: 24, transform: 'rotate(180deg)' }} />

      {/* Scale + revision strip — bottom */}
      <div style={styles.strip}>
        <span style={styles.stripItem}>WEBNA DIGITAL STUDIO</span>
        <span style={styles.stripDivider} />
        <span style={styles.stripItem}>SITE LAYOUT — REV.01</span>
        <span style={styles.stripDivider} />
        <span style={styles.stripItem}>SCALE 1:1</span>
        <span style={styles.stripDivider} />
        <span style={styles.stripItem}>2025 — KUWAIT</span>
      </div>

      {/* Main content */}
      <div style={styles.content}>

        {/* Logo */}
        <div style={styles.logoRow}>
          <span style={styles.logoEn}>WEBNA</span>
          <span style={styles.logoDivider} />
          <span style={styles.logoAr}>وبنا</span>
        </div>

        {/* Stamp */}
        <div style={styles.stamp}>
          <span style={styles.stampText}>UNDER CONSTRUCTION</span>
        </div>

        {/* Wireframe SVG */}
        <div style={styles.svgWrap}>
          {/* Dimension annotation — top */}
          <svg
            ref={svgRef}
            viewBox="0 0 320 200"
            style={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Annotation lines */}
            <line x1="10" y1="5" x2="310" y2="5" stroke="rgba(96,165,250,0.35)" strokeWidth="0.5" markerStart="url(#arr)" markerEnd="url(#arr)" />
            <text x="160" y="3.5" style={{ fontSize: 5, fill: 'rgba(96,165,250,0.6)', textAnchor: 'middle', fontFamily: 'monospace', letterSpacing: 0.5 }}>1400px</text>

            <line x1="5" y1="10" x2="5" y2="190" stroke="rgba(96,165,250,0.35)" strokeWidth="0.5" />
            <text x="1.5" y="105" style={{ fontSize: 5, fill: 'rgba(96,165,250,0.6)', textAnchor: 'middle', fontFamily: 'monospace', writingMode: 'vertical-rl', letterSpacing: 0.5 }}>100vh</text>

            {/* Label callouts */}
            <line x1="310" y1="10" x2="316" y2="10" stroke="rgba(96,165,250,0.3)" strokeWidth="0.4" />
            <line x1="310" y1="32" x2="316" y2="32" stroke="rgba(96,165,250,0.3)" strokeWidth="0.4" />
            <line x1="316" y1="10" x2="316" y2="32" stroke="rgba(96,165,250,0.3)" strokeWidth="0.4" />
            <text x="318" y="22" style={{ fontSize: 4, fill: 'rgba(96,165,250,0.5)', fontFamily: 'monospace' }}>NAV</text>

            <line x1="310" y1="35" x2="316" y2="35" stroke="rgba(96,165,250,0.3)" strokeWidth="0.4" />
            <line x1="310" y1="105" x2="316" y2="105" stroke="rgba(96,165,250,0.3)" strokeWidth="0.4" />
            <line x1="316" y1="35" x2="316" y2="105" stroke="rgba(96,165,250,0.3)" strokeWidth="0.4" />
            <text x="318" y="72" style={{ fontSize: 4, fill: 'rgba(96,165,250,0.5)', fontFamily: 'monospace' }}>HERO</text>

            <defs>
              <marker id="arr" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                <path d="M0,0 L0,4 L4,2 z" fill="rgba(96,165,250,0.4)" />
              </marker>
            </defs>

            {/* Animated wireframe rects */}
            {SHAPES.map((s, i) => {
              const p = perimeter(s.w, s.h);
              return (
                <rect
                  key={i}
                  className="bp-rect"
                  data-perim={p}
                  x={s.x} y={s.y}
                  width={s.w} height={s.h}
                  fill="none"
                  stroke="#60A5FA"
                  strokeWidth={i === 0 ? 0.8 : 0.5}
                  strokeOpacity={i === 0 ? 0.5 : 0.35}
                  style={{
                    animation: `bp-draw 1.2s ease forwards`,
                    animationDelay: `${s.delay}s`,
                  }}
                />
              );
            })}

            {/* Nav logo placeholder */}
            <rect x="14" y="14" width="24" height="6" fill="none" stroke="#60A5FA" strokeWidth="0.4" strokeOpacity="0.4"
              style={{ animation: 'bp-draw 0.8s ease forwards', animationDelay: '0.6s', strokeDasharray: 60, strokeDashoffset: 60 }} />

            {/* Hero image placeholder — dashed */}
            <rect x="180" y="40" width="120" height="60" fill="none" stroke="#60A5FA" strokeWidth="0.4" strokeOpacity="0.25"
              strokeDasharray="4 2"
              style={{ animation: 'bp-fade 0.6s ease forwards', animationDelay: '1.4s', opacity: 0 }} />
            <line x1="180" y1="40" x2="300" y2="100" stroke="#60A5FA" strokeWidth="0.3" strokeOpacity="0.2"
              style={{ animation: 'bp-fade 0.6s ease forwards', animationDelay: '1.6s', opacity: 0 }} />
            <line x1="300" y1="40" x2="180" y2="100" stroke="#60A5FA" strokeWidth="0.3" strokeOpacity="0.2"
              style={{ animation: 'bp-fade 0.6s ease forwards', animationDelay: '1.6s', opacity: 0 }} />
          </svg>
        </div>

        <p style={styles.sub}>Building something great — stay tuned.</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: 'fixed',
    inset: 0,
    background: '#04070f',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    fontFamily: "'DM Sans', sans-serif",
  },
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: [
      'linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px)',
      'linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)',
      'linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px)',
      'linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)',
    ].join(','),
    backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
    WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 100%)',
    maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 100%)',
  },
  crosshair: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderTop: '1px solid rgba(96,165,250,0.4)',
    borderLeft: '1px solid rgba(96,165,250,0.4)',
  },
  strip: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 32,
    borderTop: '1px solid rgba(37,99,235,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0,
    background: 'rgba(4,7,15,0.8)',
  },
  stripItem: {
    fontSize: 9,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'rgba(96,165,250,0.45)',
    fontFamily: 'monospace',
    padding: '0 20px',
  },
  stripDivider: {
    width: 1,
    height: 14,
    background: 'rgba(37,99,235,0.3)',
    flexShrink: 0,
  },
  content: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    padding: '0 24px',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  logoEn: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(28px, 5vw, 48px)',
    letterSpacing: '0.12em',
    color: 'rgba(232,234,240,0.9)',
    lineHeight: 1,
  },
  logoDivider: {
    width: 1,
    height: 28,
    background: 'rgba(96,165,250,0.3)',
  },
  logoAr: {
    fontFamily: "'Noto Kufi Arabic', sans-serif",
    fontSize: 'clamp(18px, 3vw, 30px)',
    fontWeight: 300,
    color: 'rgba(96,165,250,0.6)',
    lineHeight: 1,
  },
  stamp: {
    border: '2px solid rgba(96,165,250,0.5)',
    padding: '6px 20px',
    transform: 'rotate(-2deg)',
    background: 'rgba(37,99,235,0.06)',
  },
  stampText: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(18px, 3.5vw, 32px)',
    letterSpacing: '0.18em',
    color: 'rgba(96,165,250,0.85)',
    lineHeight: 1,
  },
  svgWrap: {
    width: '100%',
    maxWidth: 480,
  },
  svg: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  sub: {
    fontSize: 12,
    color: 'rgba(96,165,250,0.35)',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    fontWeight: 300,
    margin: 0,
  },
};
