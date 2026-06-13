/* TopBar — breadcrumb · global search pill · bug icon · user. From src/components/top-bar.tsx */

const CRUMB = {
  home:'Home', startups:'Startups', investors:'Investors', corporate:'Corporate',
  people:'People', graph:'Graph', programs:'Programs', watchlists:'Watchlists',
  explorer:'Data Explorer', rounds:'Rounds Inbox', settings:'Settings',
};

function TopBar({ active, detailLabel, query, setQuery, count }) {
  return (
    <div style={{ height:64, borderBottom:'1px solid #e5e5e5', display:'flex',
      alignItems:'center', justifyContent:'space-between', padding:'0 24px',
      background:'#fff', flexShrink:0 }}>
      <div style={{ display:'flex', alignItems:'center', gap:24, flex:1, minWidth:0 }}>
        <div style={{ display:'flex', alignItems:'center', gap:7, minWidth:160, fontSize:14 }}>
          <span style={{ color:'#737373', fontWeight:500 }}>{CRUMB[active] || 'Home'}</span>
          {detailLabel && <>
            <window.Icon name="ChevronRight" size={14} style={{ color:'#d4d4d4' }} />
            <span style={{ color:'#0a0a0a', fontWeight:500 }}>{detailLabel}</span>
          </>}
        </div>
        <div style={{ position:'relative', width:288, flexShrink:0 }}>
          <window.Icon name="Search" size={16} style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', color:'#a3a3a3' }} />
          <input value={query} onChange={e=>setQuery(e.target.value)}
            placeholder="Search startups, investors..." className="eds-search-input"
            style={{ width:'100%', padding:'9px 16px 9px 36px', border:'1px solid #e5e5e5',
              borderRadius:9999, fontSize:14, fontFamily:'var(--font-sans)', boxSizing:'border-box', outline:'none' }} />
        </div>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:12, flexShrink:0 }}>
        {count != null && (
          <div style={{ display:'flex', alignItems:'center', gap:6, padding:'4px 8px',
            background:'#fafafa', border:'1px solid #e5e5e5', borderRadius:8 }}>
            <span style={{ fontSize:11, fontWeight:500, color:'#404040' }}>Startups</span>
            <span style={{ fontSize:11, color:'#a3a3a3' }}>{count}</span>
          </div>
        )}
        <button style={{ background:'none', border:'none', cursor:'pointer', color:'#a3a3a3', display:'flex', padding:8, borderRadius:8 }}>
          <window.Icon name="Bug" size={18} />
        </button>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end' }}>
          <span style={{ fontSize:14, fontWeight:500, color:'#0a0a0a' }}>José Cabañero</span>
          <span style={{ fontSize:10, color:'#0a0a0a', textTransform:'uppercase', letterSpacing:'.05em', fontWeight:600, cursor:'pointer', whiteSpace:'nowrap' }}>Log Out</span>
        </div>
        <div style={{ width:32, height:32, borderRadius:9999, background:'#f5f5f5', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <window.Icon name="User" size={16} style={{ color:'#0a0a0a' }} />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TopBar });
