/* HomeScreen — news feed + recent activity columns. From src/app/home/page.tsx */

function NewsCard({ item }) {
  const [bg, fg] = window.TAG_COLORS[item.category] || ['#f5f5f5','#737373'];
  return (
    <a className="eds-newscard">
      <div style={{ display:'flex', justifyContent:'space-between' }}>
        <span style={{ fontSize:11, color:'#a3a3a3' }}>{item.source}</span>
        <span style={{ fontSize:11, color:'#a3a3a3' }}>{item.date}</span>
      </div>
      <p style={{ margin:0, fontSize:13, fontWeight:500, color:'#171717', lineHeight:1.35,
        display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{item.title}</p>
      <p style={{ margin:0, fontSize:11, color:'#737373', lineHeight:1.4, flex:1,
        display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{item.summary}</p>
      <span style={{ alignSelf:'flex-start', fontSize:10, fontWeight:500, padding:'2px 8px',
        borderRadius:9999, marginTop:'auto', background:bg, color:fg }}>{item.category}</span>
    </a>
  );
}

function ActivityRow({ name, color, tag, meta, time }) {
  return (
    <div className="eds-arow">
      <div style={{ minWidth:0, paddingRight:8 }}>
        <p style={{ margin:0, fontSize:13, fontWeight:500, color:'#171717', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{name}</p>
        <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:3 }}>
          {tag && color && <span style={{ fontSize:10, color:'#fff', padding:'1px 7px', borderRadius:9999, background:color, whiteSpace:'nowrap' }}>{tag}</span>}
          {meta && <span style={{ fontSize:11, color:'#a3a3a3' }}>{meta}</span>}
        </div>
      </div>
      <span style={{ fontSize:11, color:'#a3a3a3', flexShrink:0 }}>{time}</span>
    </div>
  );
}

function ActivityColumn({ title, onViewAll, children }) {
  return (
    <div style={{ flex:1, minWidth:0, background:'#fff', border:'1px solid #e5e5e5', borderRadius:12, overflow:'hidden' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 12px', borderBottom:'1px solid #f5f5f5' }}>
        <h3 style={{ margin:0, fontSize:14, fontWeight:600, color:'#171717' }}>{title}</h3>
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
        <h1 style={{ margin:0, fontSize:20, fontWeight:600, color:'#171717' }}>Home</h1>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <span style={{ fontSize:14, color:'#737373' }}>Showing:</span>
          <select style={{ fontSize:14, border:'1px solid #e5e5e5', borderRadius:8, padding:'6px 10px', background:'#fff', cursor:'pointer' }}>
            <option>All regions</option><option>Europe</option><option>North America</option>
          </select>
        </div>
      </div>

      <section>
        <window.Eyebrow>Agrifoodtech News</window.Eyebrow>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12, marginTop:12 }}>
          {window.NEWS.map((n,i)=><NewsCard key={i} item={n} />)}
        </div>
      </section>

      <section>
        <window.Eyebrow>Recent Activity</window.Eyebrow>
        <div style={{ display:'flex', gap:16, marginTop:12 }}>
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
