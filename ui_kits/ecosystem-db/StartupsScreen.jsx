/* StartupsScreen — filterable / sortable entity table. From EntityList.tsx + startups/page.tsx */

function StartupsScreen({ query, onOpen }) {
  const [filtersOpen, setFiltersOpen] = React.useState(false);
  const [filters, setFilters] = React.useState({ sector:'', stage:'', location:'' });
  const [sort, setSort] = React.useState({ key:'company_name', dir:'asc' });

  const setFilter = (k,v)=> setFilters(f=>({ ...f, [k]:v }));
  const activeCount = Object.values(filters).filter(v=>v.trim()).length;

  let rows = window.STARTUPS.filter(s => {
    if (query && query.trim() && !s.company_name.toLowerCase().includes(query.toLowerCase())) return false;
    if (filters.sector && s.sector !== filters.sector) return false;
    if (filters.stage && s.funding_stage !== filters.stage) return false;
    if (filters.location) {
      const q = filters.location.toLowerCase();
      if (!(`${s.city} ${s.country} ${s.region}`).toLowerCase().includes(q)) return false;
    }
    return true;
  });
  rows = [...rows].sort((a,b)=>{
    const av=String(a[sort.key]??'').toLowerCase(), bv=String(b[sort.key]??'').toLowerCase();
    const c = av.localeCompare(bv, undefined, { numeric:true });
    return sort.dir==='asc'?c:-c;
  });
  const toggleSort = (k)=> setSort(s=> s.key===k ? { key:k, dir:s.dir==='asc'?'desc':'asc' } : { key:k, dir:'asc' });

  const COLS = [
    { key:'company_name', label:'Company' }, { key:'sector', label:'Sector' },
    { key:'funding_stage', label:'Stage' }, { key:'country', label:'Location' },
    { key:'founded_year', label:'Founded' }, { key:'employees', label:'Employees' },
  ];
  const Th = ({ col }) => (
    <th style={{ textAlign:'left', padding:'10px 14px', fontSize:11, fontWeight:600,
      textTransform:'uppercase', letterSpacing:'.04em', color:'#737373' }}>
      <button onClick={()=>toggleSort(col.key)} style={{ display:'inline-flex', alignItems:'center', gap:4,
        background:'none', border:'none', cursor:'pointer', font:'inherit', color:'inherit', textTransform:'inherit', letterSpacing:'inherit', padding:0 }}>
        {col.label}
        <window.Icon name={sort.key===col.key ? (sort.dir==='asc'?'ChevronUp':'ChevronDown') : 'ChevronsUpDown'} size={12}
          style={{ color: sort.key===col.key ? '#737373' : '#d4d4d4' }} />
      </button>
    </th>
  );

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
        <div>
          <h1 style={{ margin:0, fontSize:24, fontWeight:500, letterSpacing:'-0.02em' }}>Startups</h1>
          <p style={{ margin:'4px 0 0', fontSize:14, color:'#737373' }}>Browse and filter all startups</p>
        </div>
        <window.Button icon="Plus">Add Startup</window.Button>
      </div>

      {/* Toolbar */}
      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <button key={'fb-'+(filtersOpen||activeCount>0)} onClick={()=>setFiltersOpen(v=>!v)} className={`eds-filterbtn ${(filtersOpen||activeCount)?'on':''}`}>
            <window.Icon name="SlidersHorizontal" size={14} /> Filters
            {activeCount>0 && <span style={{ background:'#fff', color:'#171717', fontSize:10, fontWeight:700, padding:'1px 6px', borderRadius:9999 }}>{activeCount}</span>}
          </button>
          <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:8 }}>
            <span style={{ fontSize:12, color:'#a3a3a3' }}>{rows.length} total</span>
            <window.Button variant="outline" size="sm" icon="Download">Export</window.Button>
          </div>
        </div>
        {filtersOpen && (
          <div style={{ padding:16, background:'#fff', border:'1px solid #e5e5e5', borderRadius:12,
            display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:12 }}>
            <FilterField label="Sector"><select value={filters.sector} onChange={e=>setFilter('sector',e.target.value)} style={selStyle}><option value="">All</option>{window.SECTORS.map(s=><option key={s}>{s}</option>)}</select></FilterField>
            <FilterField label="Stage"><select value={filters.stage} onChange={e=>setFilter('stage',e.target.value)} style={selStyle}><option value="">All</option>{window.FUNDING_STAGES.map(s=><option key={s}>{s}</option>)}</select></FilterField>
            <FilterField label="Location"><input value={filters.location} onChange={e=>setFilter('location',e.target.value)} placeholder="City, country, or region" style={inpStyle} /></FilterField>
            {activeCount>0 && <div style={{ display:'flex', alignItems:'flex-end' }}>
              <button onClick={()=>setFilters({sector:'',stage:'',location:''})} style={{ display:'flex', alignItems:'center', gap:4, fontSize:12, color:'#737373', background:'none', border:'none', cursor:'pointer' }}><window.Icon name="X" size={12}/> Clear filters</button>
            </div>}
          </div>
        )}
      </div>

      {/* Table */}
      <div style={{ background:'#fff', border:'1px solid #e5e5e5', borderRadius:12, overflow:'hidden' }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
          <thead style={{ background:'#fafafa', borderBottom:'1px solid #e5e5e5' }}>
            <tr>{COLS.map(c=><Th key={c.key} col={c} />)}<th style={{ width:56 }}></th></tr>
          </thead>
          <tbody>
            {rows.map(s=>(
              <Row key={s.id} s={s} onOpen={onOpen} />
            ))}
            {rows.length===0 && <tr><td colSpan={7} style={{ padding:'48px', textAlign:'center', color:'#a3a3a3', fontSize:14 }}>No results found.</td></tr>}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {rows.length>0 && (
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:12, color:'#737373' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <span>Rows per page:</span>
            <select style={{ ...selStyle, width:'auto', padding:'4px 8px' }}><option>25</option><option>50</option></select>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <span>1–{rows.length} of {rows.length}</span>
            <button style={pgBtn(true)} disabled><window.Icon name="ChevronLeft" size={16}/></button>
            <button style={pgBtn(true)} disabled><window.Icon name="ChevronRight" size={16}/></button>
          </div>
        </div>
      )}
    </div>
  );
}

function Row({ s, onOpen }) {
  return (
    <tr className="eds-trow">
      <td style={td}><a className="eds-link" onClick={()=>onOpen(s)}>{s.company_name}</a></td>
      <td style={td}><window.SectorBadge sector={s.sector} size="xs" /></td>
      <td style={{ ...td, color:'#737373' }}>{s.funding_stage}</td>
      <td style={{ ...td, color:'#737373' }}>{s.city}, {s.country}</td>
      <td style={{ ...td, color:'#737373' }}>{s.founded_year}</td>
      <td style={{ ...td, color:'#737373' }}>{s.employees}</td>
      <td style={td}>
        <div style={{ display:'flex', justifyContent:'flex-end' }}>
          <button title="Add to watchlist" className="eds-iconbtn"><window.Icon name="Bookmark" size={14}/></button>
        </div>
      </td>
    </tr>
  );
}

function FilterField({ label, children }) {
  return <div><label style={{ display:'block', fontSize:12, fontWeight:500, color:'#737373', marginBottom:4 }}>{label}</label>{children}</div>;
}
const selStyle = { width:'100%', padding:'7px 10px', fontSize:13, border:'1px solid #e5e5e5', borderRadius:6, background:'#fff', fontFamily:'var(--font-sans)', boxSizing:'border-box', cursor:'pointer' };
const inpStyle = { width:'100%', padding:'7px 10px', fontSize:13, border:'1px solid #e5e5e5', borderRadius:6, fontFamily:'var(--font-sans)', boxSizing:'border-box' };
const td = { padding:'11px 14px' };
const pgBtn = (dis)=>({ padding:4, borderRadius:6, background:'none', border:'none', cursor:dis?'not-allowed':'pointer', opacity:dis?.3:1, display:'flex', color:'#737373' });

Object.assign(window, { StartupsScreen });
