/* Shared primitives for the Ecosystem DB kit — flat, bordered, monochrome. */

/* SectorBadge — austere: ink outline chip with a small sector-color square (data encoding). */
function SectorBadge({ sector, size = 'sm' }) {
  if (!sector) return React.createElement('span', { style:{ color:'#9B9B9B' } }, '—');
  const fz = size === 'xs' ? 10 : 11;
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:6, background:'#fff', color:'#111',
      border:'1px solid #111', fontSize:fz, fontWeight:600, textTransform:'uppercase',
      letterSpacing:'.04em', padding:'2px 8px', borderRadius:0, whiteSpace:'nowrap',
    }}>
      <span style={{ width:8, height:8, background:window.sectorColor(sector), flexShrink:0 }}></span>
      {sector}
    </span>
  );
}

function Chip({ children, tone = 'gray' }) {
  const map = {
    gray: { bg:'#fff', fg:'#111', bd:'#111' },
    outline: { bg:'#fff', fg:'#111', bd:'#111' },
    dark: { bg:'#111', fg:'#fff', bd:'#111' },
    red: { bg:'#E1251B', fg:'#fff', bd:'#E1251B' },
  };
  const t = map[tone] || map.gray;
  return (
    <span style={{
      background:t.bg, color:t.fg, border:`1px solid ${t.bd}`, fontSize:11,
      fontWeight:600, padding:'2px 9px', borderRadius:0, whiteSpace:'nowrap',
    }}>{children}</span>
  );
}

function Button({ children, variant = 'primary', size = 'md', icon, onClick, type, style }) {
  return (
    <button type={type} onClick={onClick} className={`eds-btn ${size} ${variant}`} style={style}>
      {icon && <window.Icon name={icon} size={size === 'sm' ? 13 : 16} />}
      {children}
    </button>
  );
}

/* Card — the recurring unit: white, 1px border, rounded-xl. */
function Card({ children, style, hover, onClick }) {
  return (
    <div onClick={onClick} className={`eds-card ${hover ? 'hoverable' : ''}`} style={style}>{children}</div>
  );
}

function Eyebrow({ children }) {
  return <h2 style={{ margin:0, fontSize:12, fontWeight:700, textTransform:'uppercase',
    letterSpacing:'.14em', color:'#111', borderBottom:'2px solid #111', paddingBottom:6 }}>{children}</h2>;
}

Object.assign(window, { SectorBadge, Chip, Button, Card, Eyebrow });
