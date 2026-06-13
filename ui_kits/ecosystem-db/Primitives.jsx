/* Shared primitives for the Ecosystem DB kit — flat, bordered, monochrome. */

function SectorBadge({ sector, size = 'sm' }) {
  if (!sector) return React.createElement('span', { style:{ color:'#a3a3a3' } }, '—');
  const fz = size === 'xs' ? 10 : 11;
  return (
    <span style={{
      backgroundColor: window.sectorColor(sector), color:'#fff', fontSize:fz,
      fontWeight:500, padding:'2px 9px', borderRadius:9999, whiteSpace:'nowrap',
    }}>{sector}</span>
  );
}

function Chip({ children, tone = 'gray' }) {
  const map = {
    gray: { bg:'#f5f5f5', fg:'#404040', bd:'transparent' },
    outline: { bg:'#fff', fg:'#404040', bd:'#e5e5e5' },
    dark: { bg:'#171717', fg:'#fff', bd:'transparent' },
  };
  const t = map[tone] || map.gray;
  return (
    <span style={{
      background:t.bg, color:t.fg, border:`1px solid ${t.bd}`, fontSize:11,
      fontWeight:500, padding:'2px 9px', borderRadius:9999, whiteSpace:'nowrap',
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
  return <h2 style={{ margin:0, fontSize:12, fontWeight:600, textTransform:'uppercase',
    letterSpacing:'.06em', color:'#737373' }}>{children}</h2>;
}

Object.assign(window, { SectorBadge, Chip, Button, Card, Eyebrow });
