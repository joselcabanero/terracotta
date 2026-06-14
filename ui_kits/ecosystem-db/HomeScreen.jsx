/* HomeScreen — news feed + recent activity columns. From src/app/home/page.tsx */

function NewsCard({ item }) {
  const isFunding = item.category === 'Funding';
  return (
    <a className="eds-newscard">
      <div style={{ display:'flex', justifyContent:'space-between', fontFamily:'var(--font-mono)' }}>
        <span style={{ fontSize:10, color:'#6F6F6F', textTransform:'uppercase', letterSpacing:'.06em' }}>{item.source}</span>
        <span style={{ fontSize:10, color:'#9B9B9B' }}>{item.date}</span>
      </div>
      <p style={{ margin:0, fontSize:13, fontWeight:700, color:'#111', lineHeight:1.25, letterSpacing:'-0.01em',
        display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{item.title}</p>
      <p style={{ margin:0, fontSize:11, color:'#6F6F6F', lineHeight:1.4, flex:1,
        display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{item.summary}</p>
      <span style={{ alignSelf:'flex-start', fontSize:9, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', padding:'2px 7px',
        borderRadius:0, marginTop:'auto', background: isFunding ? '#E1251B' : '#fff', color: isFunding ? '#fff' : '#111', border: isFunding ? '1px solid #E1251B' : '1px solid #111' }}>{item.category}</span>
    </a>
  );
}

function ActivityRow({ name, color, tag, meta, time }) {
  return (
    <div className="eds-arow">
      <div style={{ minWidth:0, paddingRight:8 }}>
        <p style={{ margin:0, fontSize:13, fontWeight:500, color:'#111', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{name}</p>
        <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:3 }}>
          {tag && color && <span style={{ width:8, height:8, background:color, flexShrink:0 }}></span>}
          {(tag || meta) && <span style={{ fontSize:11, color:'#6F6F6F' }}>{[tag, meta].filter(Boolean).join(' · ')}</span>}
        </div>
      </div>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'#9B9B9B', flexShrink:0 }}>{time}</span>
    </div>
  );
}

function ActivityColumn({ title, onViewAll, children }) {
  return (
    <div style={{ flex:1, minWidth:0, background:'#fff', border:'1px solid #111', borderRadius:0, overflow:'hidden' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 12px', borderBottom:'2px solid #111' }}>
        <h3 style={{ margin:0, fontSize:13, fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em', color:'#111' }}>{title}</h3>
        <a className="eds-viewall" onClick={onViewAll}>View all →</a>
      </div>
      {children}
    </div>
  );
}

function HomeScreen({ onNavigate }) {
  const times = ['3h','1d','2d','4d'];
  return (
    <div style={{ maxWidth:1120, margin:'0 auto', padding:'8px 4px 48px', display:'flex', flexDirection:'column', gap:24 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:8 }}>
        <h1 style={{ margin:0, fontSize:31, fontWeight:700, letterSpacing:'-0.015em', color:'#111' }}>Home</h1>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <span style={{ fontSize:14, color:'#6F6F6F' }}>Showing:</span>
          <select style={{ fontSize:14, border:'1px solid #111', borderRadius:0, padding:'6px 10px', background:'#fff', cursor:'pointer', fontFamily:'var(--font-sans)' }}>
            <option>All regions</option><option>Europe</option><option>North America</option>
          </select>
        </div>
      </div>

      <section>
        <window.Eyebrow>Agrifoodtech News</window.Eyebrow>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12, marginTop:16 }}>
          {window.NEWS.map((n,i)=><NewsCard key={i} item={n} />)}
        </div>
      </section>

      <section>
        <window.Eyebrow>Recent Activity</window.Eyebrow>
        <div style={{ display:'flex', gap:16, marginTop:16 }}>
          <ActivityColumn title="Latest Startups" onViewAll={()=>onNavigate('startups')}>
            {window.STARTUPS.slice(0,4).map((s,i)=>(
              <ActivityRow key={s.id} name={s.company_name} color={window.sectorColor(s.sector)} tag={s.sector} meta={s.country} time={times[i]} />
            ))}
          </ActivityColumn>
          <ActivityColumn title="Latest Investors" onViewAll={()=>onNavigate('investors')}>
            {window.INVESTORS.slice(0,4).map((iv,i)=>(
              <ActivityRow key={iv.id} name={iv.investor_name} meta={`${iv.investor_type} · ${iv.country}`} time={times[i]} />
            ))}
          </ActivityColumn>
          <ActivityColumn title="Latest People" onViewAll={()=>onNavigate('people')}>
            {window.PEOPLE.map((p,i)=>(
              <ActivityRow key={p.id} name={p.full_name} meta={`${p.role} · ${p.company}`} time={times[i]} />
            ))}
          </ActivityColumn>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomeScreen });
