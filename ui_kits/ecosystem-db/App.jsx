/* App — shell + click-through routing. Login → Home → Startups → Detail. */

function App() {
  const [authed, setAuthed] = React.useState(false);
  const [route, setRoute] = React.useState('home');   // active nav key
  const [detail, setDetail] = React.useState(null);   // selected startup
  const [query, setQuery] = React.useState('');
  const [expanded, setExpanded] = React.useState(false);

  const navigate = (key) => { setRoute(key); setDetail(null); setQuery(''); };
  const openStartup = (s) => setDetail(s);

  if (!authed) return <window.LoginScreen onSignIn={()=>setAuthed(true)} />;

  let content, count = null;
  if (detail) {
    content = <window.DetailScreen startup={detail} onBack={()=>setDetail(null)} />;
    count = window.STARTUPS.length;
  } else if (route === 'home') {
    content = <window.HomeScreen onNavigate={navigate} />;
  } else if (route === 'startups') {
    content = <window.StartupsScreen query={query} onOpen={openStartup} />;
    count = window.STARTUPS.length;
  } else {
    content = <Placeholder route={route} />;
  }

  const isDetail = !!detail;
  return (
    <div style={{ display:'flex', height:'100vh', overflow:'hidden' }}>
      <window.Sidebar key={'sb-'+(detail?'startups':route)+'-'+expanded} active={detail ? 'startups' : route} expanded={expanded} onToggle={()=>setExpanded(v=>!v)} onNavigate={navigate} />
      <main style={{ flex:1, display:'flex', flexDirection:'column', overflowY:'auto' }}>
        <window.TopBar active={detail ? 'startups' : route}
          detailLabel={detail ? detail.company_name : null}
          query={query} setQuery={setQuery} count={count} />
        <div className="page-transition" key={(detail?detail.id:route)+query.slice(0,0)} style={{ padding:24, flex:1 }}>
          {content}
        </div>
      </main>
    </div>
  );
}

function Placeholder({ route }) {
  const titles = {
    investors:['Investors','Browse and filter all investors','TrendingUp'],
    corporate:['Corporate','Browse all corporate entities','Briefcase'],
    people:['People','Browse all people in the ecosystem','Users'],
    graph:['Graph','Explore the ecosystem as a force-directed network','Network'],
    programs:['Programs','Saved filter sets and investor matches','FolderKanban'],
    watchlists:['Watchlists','Your saved startups and investors','Bookmark'],
    explorer:['Data Explorer','Cross-filter dashboards and charts','ChartColumn'],
    rounds:['Rounds Inbox','Review draft investment rounds','Inbox'],
    settings:['Settings','CSV import and user management','Settings'],
  };
  const [t, sub, icon] = titles[route] || ['—','',''];
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
      <div>
        <h1 style={{ margin:0, fontSize:31, fontWeight:700, letterSpacing:'-0.015em' }}>{t}</h1>
        <p style={{ margin:'6px 0 0', fontSize:14, color:'#6F6F6F' }}>{sub}</p>
      </div>
      <div style={{ border:'1px solid #DBDBDB', borderRadius:0, padding:'64px 24px', textAlign:'center',
        display:'flex', flexDirection:'column', alignItems:'center', gap:12, color:'#6F6F6F' }}>
        <window.Icon name={icon} size={28} style={{ color:'#C2C2C2' }} />
        <p style={{ margin:0, fontSize:14 }}>This screen is not reconstructed in the UI kit.</p>
        <p style={{ margin:0, fontSize:12 }}>See <code style={{ fontFamily:'var(--font-mono)' }}>Home</code> and <code style={{ fontFamily:'var(--font-mono)' }}>Startups</code> for the full pattern.</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
