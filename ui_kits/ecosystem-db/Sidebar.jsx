/* Sidebar — collapsible icon rail (52px → 200px), faithful to src/components/sidebar.tsx.
   Interactive states use CSS classes (.eds-nav) so they survive re-renders. */

const NAV_GROUPS = [
  { label:'MAIN', items:[ { key:'home', label:'Home', icon:'House' } ] },
  { label:'DB', items:[
    { key:'startups', label:'Startups', icon:'Building2' },
    { key:'investors', label:'Investors', icon:'TrendingUp' },
    { key:'corporate', label:'Corporate', icon:'Briefcase' },
    { key:'people', label:'People', icon:'Users' },
  ]},
  { label:'TOOLS', items:[
    { key:'rounds', label:'Rounds Inbox', icon:'Inbox' },
    { key:'explorer', label:'Data Explorer', icon:'ChartColumn' },
    { key:'graph', label:'Graph', icon:'Network' },
    { key:'programs', label:'Programs', icon:'FolderKanban' },
    { key:'watchlists', label:'Watchlists', icon:'Bookmark' },
    { key:'scout', label:'Scout', icon:'Telescope', disabled:true },
  ]},
];

function NavItem({ item, active, expanded, onClick }) {
  const isActive = active === item.key;
  const cls = ['eds-nav', expanded ? 'expanded' : 'collapsed',
    isActive ? 'active' : '', item.disabled ? 'disabled' : ''].filter(Boolean).join(' ');
  return (
    <a className={cls} onClick={()=>!item.disabled && onClick(item.key)} title={!expanded ? item.label : undefined}>
      <window.Icon name={item.icon} size={16} />
      {expanded && <span className="eds-nav-label">
        {item.label}{item.disabled && <span style={{color:'#9B9B9B'}}> (soon)</span>}
      </span>}
    </a>
  );
}

function Sidebar({ active, expanded, onToggle, onNavigate }) {
  return (
    <nav style={{
      height:'100%', background:'#fff', borderRight:'1px solid #111',
      display:'flex', flexDirection:'column', flexShrink:0, padding:'12px 0',
      gap:4, overflow:'hidden', transition:'width .2s', width: expanded ? 200 : 52,      alignItems: expanded ? 'stretch' : 'center',
    }}>
      {/* Logo + toggle */}
      <div style={{ display:'flex', alignItems:'center', marginBottom:8,
        width:'100%', padding: expanded ? '0 12px' : 0,
        justifyContent: expanded ? 'space-between' : 'center' }}>
        <div style={{ width:32, height:32, borderRadius:0, background:'#E1251B',
          display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
          <span style={{ fontFamily:'var(--font-sans)', fontSize:13, fontWeight:700, letterSpacing:'-0.02em', color:'#fff' }}>EA</span>
        </div>
        {expanded && <span style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'#111', flex:1, marginLeft:10, whiteSpace:'nowrap' }}>Eatable Adventures</span>}
        <button onClick={onToggle} className="eds-iconbtn" style={{ color:'#6F6F6F' }}>
          <window.Icon name={expanded ? 'ChevronLeft' : 'ChevronRight'} size={14} />
        </button>
      </div>

      {NAV_GROUPS.map((g, gi) => (
        <div key={g.label} style={{ display:'flex', flexDirection:'column', gap:2, width:'100%',
          padding: expanded ? '0 8px' : '0 6px', alignItems: expanded ? 'stretch':'center',
          marginTop: gi>0 ? 8 : 0, paddingTop: gi>0 ? 8 : 0,
          borderTop: gi>0 ? '1px solid #DBDBDB' : 'none' }}>
          {expanded && <span style={{ fontFamily:'var(--font-sans)', fontSize:10, fontWeight:700,
            textTransform:'uppercase', letterSpacing:'.12em', color:'#6F6F6F', padding:'0 8px 4px' }}>{g.label}</span>}
          {g.items.map(it => <NavItem key={it.key} item={it} active={active} expanded={expanded} onClick={onNavigate} />)}
        </div>
      ))}

      <div style={{ marginTop:'auto', width:'100%', padding: expanded ? '0 8px' : '0 6px',
        display:'flex', alignItems: expanded ? 'stretch':'center' }}>
        <NavItem item={{ key:'settings', label:'Settings', icon:'Settings' }} active={active} expanded={expanded} onClick={onNavigate} />
      </div>
    </nav>
  );
}

Object.assign(window, { Sidebar });
