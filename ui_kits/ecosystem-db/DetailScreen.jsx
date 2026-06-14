/* DetailScreen — startup profile: header + 4-card grid + connected nodes.
   From src/app/startups/[id]/page.tsx */

function DetailCard({ title, children }) {
  return (
    <window.Card style={{ padding:0 }}>
      <div style={{ padding:'12px 16px', borderBottom:'2px solid #111' }}>
        <h3 style={{ margin:0, fontSize:13, fontWeight:700, color:'#111', textTransform:'uppercase', letterSpacing:'.06em' }}>{title}</h3>
      </div>
      <div style={{ padding:16 }}>{children}</div>
    </window.Card>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:3, marginBottom:14 }}>
      <span style={{ fontSize:11, color:'#6F6F6F', textTransform:'uppercase', letterSpacing:'.06em', fontWeight:700 }}>{label}</span>
      <span style={{ fontSize:14, color:'#111' }}>{children}</span>
    </div>
  );
}

function DetailScreen({ startup, onBack }) {
  const s = startup;
  const connected = window.PEOPLE.filter(p => p.company === s.company_name);
  return (
    <div style={{ maxWidth:960, margin:'0 auto', display:'flex', flexDirection:'column', gap:24 }}>
      <div>
        <button onClick={onBack} style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:13, color:'#6F6F6F', background:'none', border:'none', cursor:'pointer', padding:0, marginBottom:14 }}>
          <window.Icon name="ChevronLeft" size={14}/> Startups
        </button>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <div style={{ width:48, height:48, borderRadius:0, background:'#111',
              display:'flex', alignItems:'center', justifyContent:'center' }}>
              <window.Icon name="Building2" size={22} style={{ color:'#fff' }} />
            </div>
            <div>
              <h1 style={{ margin:0, fontSize:31, fontWeight:700, letterSpacing:'-0.015em' }}>{s.company_name}</h1>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:7 }}>
                <window.SectorBadge sector={s.sector} />
                <a href={'https://'+s.website_url} target="_blank" style={{ fontSize:13, color:'#111', textDecoration:'none', borderBottom:'2px solid #E1251B', paddingBottom:1 }}>{s.website_url} ↗</a>
              </div>
            </div>
          </div>
          <window.Button variant="outline" icon="SquarePen">Edit</window.Button>
        </div>
      </div>

      <p style={{ margin:0, fontSize:20, color:'#4A4A4A', lineHeight:1.4, maxWidth:680 }}>{s.short_overview}</p>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
        <DetailCard title="Company Overview">
          <Field label="Sector">{s.sector}</Field>
          <Field label="Category">{s.category}</Field>
          <Field label="Technology">{s.technology}</Field>
          <div style={{ display:'flex', flexDirection:'column', gap:3 }}>
            <span style={{ fontSize:11, color:'#6F6F6F', textTransform:'uppercase', letterSpacing:'.06em', fontWeight:700 }}>Keywords</span>
            <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginTop:2 }}>{s.keywords.map(k=><window.Chip key={k}>{k}</window.Chip>)}</div>
          </div>
        </DetailCard>
        <DetailCard title="Funding">
          <Field label="Stage"><window.Chip>{s.funding_stage}</window.Chip></Field>
          <Field label="Total Funding"><span style={{ fontFamily:'var(--font-mono)', fontWeight:500 }}>{s.total_funding}</span></Field>
          <Field label="Founded">{s.founded_year}</Field>
          <Field label="Employees">{s.employees}</Field>
        </DetailCard>
        <DetailCard title="Location">
          <Field label="City">{s.city}</Field>
          <Field label="Country">{s.country}</Field>
          <Field label="Region">{s.region}</Field>
        </DetailCard>
        <DetailCard title="Connected Nodes">
          {connected.length ? connected.map(p=>(
            <div key={p.id} style={{ display:'flex', alignItems:'center', gap:10, padding:'6px 0', borderBottom:'1px solid #DBDBDB' }}>
              <div style={{ width:30, height:30, borderRadius:0, background:'#111', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <window.Icon name="User" size={15} style={{ color:'#fff' }} />
              </div>
              <div style={{ minWidth:0 }}>
                <p style={{ margin:0, fontSize:13, fontWeight:500 }}>{p.full_name}</p>
                <p style={{ margin:0, fontSize:11, color:'#6F6F6F', fontFamily:'var(--font-mono)' }}>{p.role} · works_at</p>
              </div>
            </div>
          )) : <p style={{ margin:0, fontSize:13, color:'#6F6F6F' }}>No connected nodes yet.</p>}
        </DetailCard>
      </div>
    </div>
  );
}

Object.assign(window, { DetailScreen });
