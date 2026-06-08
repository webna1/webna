export default function ComingSoon() {
  return (
    <div style={styles.page}>
      {STARS.map((s, i) => (
        <div key={i} style={{ ...styles.star, ...s }} />
      ))}

      {DRIFTS.map((d, i) => (
        <div key={i} style={{ ...styles.drift, ...d }} />
      ))}

      <div style={{ ...styles.ringWrap, ...styles.ring1 }}><div style={styles.ring}><div style={{ ...styles.ringDot, background: '#2563EB', boxShadow: '0 0 10px #2563EB, 0 0 20px rgba(37,99,235,0.5)' }} /></div></div>
      <div style={{ ...styles.ringWrap, ...styles.ring2 }}><div style={styles.ring}><div style={{ ...styles.ringDot, background: '#93C5FD', boxShadow: '0 0 8px #93C5FD' }} /></div></div>
      <div style={{ ...styles.ringWrap, ...styles.ring3 }}><div style={{ ...styles.ring, borderColor: 'rgba(37,99,235,0.1)' }}><div style={{ ...styles.ringDot, width: 4, height: 4, background: 'white', boxShadow: '0 0 6px white' }} /></div></div>

      <div style={styles.glowOrb} />

      <div style={styles.content}>
        <span style={styles.eyebrow}>Something is coming</span>
        <h1 style={styles.title}>WEBNA</h1>
        <span style={styles.arabic}>وبنا</span>
        <div style={styles.divider} />
        <span style={styles.badge}>Launching Soon</span>
        <p style={styles.sub}>We&apos;re building something great</p>
      </div>
    </div>
  );
}

const STARS = [
  { width:2, height:2, top:'8%',  left:'12%', '--dur':'2.8s', '--delay':'0s',   '--min-op':0.3, '--max-op':1,   background:'white' },
  { width:1, height:1, top:'15%', left:'35%', '--dur':'3.5s', '--delay':'0.7s', '--min-op':0.2, '--max-op':0.8, background:'white' },
  { width:3, height:3, top:'22%', left:'78%', '--dur':'4s',   '--delay':'1.2s', '--min-op':0.4, '--max-op':1,   background:'#93C5FD', boxShadow:'0 0 4px #2563EB' },
  { width:2, height:2, top:'5%',  left:'55%', '--dur':'2.5s', '--delay':'0.3s', '--min-op':0.2, '--max-op':0.9, background:'white' },
  { width:2, height:2, top:'70%', left:'8%',  '--dur':'3.2s', '--delay':'1.5s', '--min-op':0.3, '--max-op':0.9, background:'#BFDBFE', boxShadow:'0 0 3px #60A5FA' },
  { width:1, height:1, top:'85%', left:'25%', '--dur':'4.2s', '--delay':'0.9s', '--min-op':0.2, '--max-op':0.7, background:'white' },
  { width:2, height:2, top:'75%', left:'88%', '--dur':'3.8s', '--delay':'0.5s', '--min-op':0.4, '--max-op':1,   background:'#93C5FD', boxShadow:'0 0 4px #2563EB' },
  { width:1, height:1, top:'40%', left:'5%',  '--dur':'2.9s', '--delay':'2s',   '--min-op':0.2, '--max-op':0.8, background:'white' },
  { width:2, height:2, top:'55%', left:'92%', '--dur':'3.6s', '--delay':'1s',   '--min-op':0.3, '--max-op':0.9, background:'white' },
  { width:3, height:3, top:'90%', left:'65%', '--dur':'5s',   '--delay':'0.4s', '--min-op':0.2, '--max-op':0.8, background:'#BFDBFE', boxShadow:'0 0 3px #60A5FA' },
  { width:1, height:1, top:'12%', left:'90%', '--dur':'2.7s', '--delay':'1.8s', '--min-op':0.2, '--max-op':0.7, background:'white' },
  { width:2, height:2, top:'32%', left:'18%', '--dur':'3.1s', '--delay':'2.2s', '--min-op':0.3, '--max-op':0.9, background:'#93C5FD', boxShadow:'0 0 4px #2563EB' },
  { width:1, height:1, top:'60%', left:'42%', '--dur':'3.9s', '--delay':'0.2s', '--min-op':0.1, '--max-op':0.6, background:'white' },
  { width:2, height:2, top:'28%', left:'62%', '--dur':'3.3s', '--delay':'1.4s', '--min-op':0.2, '--max-op':0.8, background:'white' },
  { width:1, height:1, top:'48%', left:'72%', '--dur':'4.1s', '--delay':'0.8s', '--min-op':0.1, '--max-op':0.5, background:'white' },
].map(s => ({
  ...s,
  position: 'absolute',
  borderRadius: '50%',
  animation: `uc-twinkle var(--dur) ease-in-out infinite var(--delay)`,
}));

const DRIFTS = [
  { width:3, height:3, background:'#2563EB', bottom:'20%', left:'30%', '--speed':'9s',  '--delay':'0s',  '--dx':'15px' },
  { width:2, height:2, background:'#93C5FD', bottom:'30%', left:'60%', '--speed':'7s',  '--delay':'2s',  '--dx':'-10px' },
  { width:2, height:2, background:'white',   bottom:'15%', left:'45%', '--speed':'11s', '--delay':'4s',  '--dx':'8px' },
  { width:3, height:3, background:'#2563EB', bottom:'25%', left:'75%', '--speed':'8s',  '--delay':'1s',  '--dx':'-20px' },
  { width:2, height:2, background:'#93C5FD', bottom:'35%', left:'20%', '--speed':'10s', '--delay':'3s',  '--dx':'12px' },
  { width:2, height:2, background:'white',   bottom:'10%', left:'55%', '--speed':'12s', '--delay':'5s',  '--dx':'-8px' },
].map(d => ({
  ...d,
  position: 'absolute',
  borderRadius: '50%',
  opacity: 0,
  animation: `uc-drift var(--speed) linear infinite var(--delay)`,
}));

const styles = {
  page: {
    position: 'fixed',
    inset: 0,
    background: 'radial-gradient(ellipse at 50% 40%, #0c1a3a 0%, #080e1f 40%, #080a0e 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    zIndex: 9999,
  },
  ringWrap: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring1: { width: 260, height: 260, animation: 'uc-orbit 18s linear infinite' },
  ring2: { width: 370, height: 370, animation: 'uc-orbit 28s linear infinite reverse' },
  ring3: { width: 470, height: 470, animation: 'uc-orbit 40s linear infinite' },
  ring: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '1px solid rgba(37,99,235,0.2)',
    position: 'relative',
  },
  ringDot: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: '50%',
    top: -3,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  glowOrb: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
    animation: 'uc-pulse 4s ease-in-out infinite',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    padding: '0 24px',
  },
  eyebrow: {
    fontSize: 11,
    letterSpacing: '6px',
    color: '#93C5FD',
    textTransform: 'uppercase',
    opacity: 0.65,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
  },
  title: {
    fontSize: 'clamp(56px, 12vw, 120px)',
    fontFamily: "'Bebas Neue', sans-serif",
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '0.06em',
    background: 'linear-gradient(135deg, #ffffff 0%, #93C5FD 50%, #2563EB 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0,
  },
  arabic: {
    fontFamily: "'Noto Kufi Arabic', sans-serif",
    fontSize: 'clamp(18px, 3vw, 28px)',
    fontWeight: 300,
    color: 'rgba(147,197,253,0.45)',
    letterSpacing: '0.02em',
    marginTop: -4,
  },
  divider: {
    width: 50,
    height: 1,
    background: 'linear-gradient(90deg, transparent, #2563EB, transparent)',
    margin: '6px 0',
  },
  badge: {
    display: 'inline-block',
    padding: '5px 16px',
    border: '1px solid rgba(147,197,253,0.3)',
    borderRadius: 20,
    fontSize: 10,
    letterSpacing: '4px',
    color: '#93C5FD',
    textTransform: 'uppercase',
    background: 'rgba(37,99,235,0.08)',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
  },
  sub: {
    fontSize: 13,
    color: 'rgba(147,197,253,0.45)',
    letterSpacing: 1,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    margin: 0,
  },
};
