/* @ds-bundle: {"format":3,"namespace":"EatableAdventuresAPPsDesignSystem_b28ef2","components":[],"sourceHashes":{"ui_kits/ecosystem-db/App.jsx":"b75d7e3b3843","ui_kits/ecosystem-db/DetailScreen.jsx":"731070413a21","ui_kits/ecosystem-db/HomeScreen.jsx":"ace14f439513","ui_kits/ecosystem-db/Icon.jsx":"780d9d3bfd77","ui_kits/ecosystem-db/LoginScreen.jsx":"da1a7003b60e","ui_kits/ecosystem-db/Primitives.jsx":"79a567865972","ui_kits/ecosystem-db/Sidebar.jsx":"73edb1111d65","ui_kits/ecosystem-db/StartupsScreen.jsx":"86118cd1ba90","ui_kits/ecosystem-db/TopBar.jsx":"9826eaede8a7","ui_kits/ecosystem-db/data.jsx":"af1799a14e22"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EatableAdventuresAPPsDesignSystem_b28ef2 = window.EatableAdventuresAPPsDesignSystem_b28ef2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/ecosystem-db/App.jsx
try { (() => {
/* App — shell + click-through routing. Login → Home → Startups → Detail. */

function App() {
  const [authed, setAuthed] = React.useState(false);
  const [route, setRoute] = React.useState('home'); // active nav key
  const [detail, setDetail] = React.useState(null); // selected startup
  const [query, setQuery] = React.useState('');
  const [expanded, setExpanded] = React.useState(false);
  const navigate = key => {
    setRoute(key);
    setDetail(null);
    setQuery('');
  };
  const openStartup = s => setDetail(s);
  if (!authed) return /*#__PURE__*/React.createElement(window.LoginScreen, {
    onSignIn: () => setAuthed(true)
  });
  let content,
    count = null;
  if (detail) {
    content = /*#__PURE__*/React.createElement(window.DetailScreen, {
      startup: detail,
      onBack: () => setDetail(null)
    });
    count = window.STARTUPS.length;
  } else if (route === 'home') {
    content = /*#__PURE__*/React.createElement(window.HomeScreen, {
      onNavigate: navigate
    });
  } else if (route === 'startups') {
    content = /*#__PURE__*/React.createElement(window.StartupsScreen, {
      query: query,
      onOpen: openStartup
    });
    count = window.STARTUPS.length;
  } else {
    content = /*#__PURE__*/React.createElement(Placeholder, {
      route: route
    });
  }
  const isDetail = !!detail;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(window.Sidebar, {
    key: 'sb-' + (detail ? 'startups' : route) + '-' + expanded,
    active: detail ? 'startups' : route,
    expanded: expanded,
    onToggle: () => setExpanded(v => !v),
    onNavigate: navigate
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(window.TopBar, {
    active: detail ? 'startups' : route,
    detailLabel: detail ? detail.company_name : null,
    query: query,
    setQuery: setQuery,
    count: count
  }), /*#__PURE__*/React.createElement("div", {
    className: "page-transition",
    key: (detail ? detail.id : route) + query.slice(0, 0),
    style: {
      padding: 24,
      flex: 1
    }
  }, content)));
}
function Placeholder({
  route
}) {
  const titles = {
    investors: ['Investors', 'Browse and filter all investors', 'TrendingUp'],
    corporate: ['Corporate', 'Browse all corporate entities', 'Briefcase'],
    people: ['People', 'Browse all people in the ecosystem', 'Users'],
    graph: ['Graph', 'Explore the ecosystem as a force-directed network', 'Network'],
    programs: ['Programs', 'Saved filter sets and investor matches', 'FolderKanban'],
    watchlists: ['Watchlists', 'Your saved startups and investors', 'Bookmark'],
    explorer: ['Data Explorer', 'Cross-filter dashboards and charts', 'ChartColumn'],
    rounds: ['Rounds Inbox', 'Review draft investment rounds', 'Inbox'],
    settings: ['Settings', 'CSV import and user management', 'Settings']
  };
  const [t, sub, icon] = titles[route] || ['—', '', ''];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 31,
      fontWeight: 700,
      letterSpacing: '-0.015em'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 14,
      color: '#6F6F6F'
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid #DBDBDB',
      borderRadius: 0,
      padding: '64px 24px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      color: '#6F6F6F'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: icon,
    size: 28,
    style: {
      color: '#C2C2C2'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14
    }
  }, "This screen is not reconstructed in the UI kit."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12
    }
  }, "See ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "Home"), " and ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "Startups"), " for the full pattern.")));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecosystem-db/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecosystem-db/DetailScreen.jsx
try { (() => {
/* DetailScreen — startup profile: header + 4-card grid + connected nodes.
   From src/app/startups/[id]/page.tsx */

function DetailCard({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement(window.Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderBottom: '2px solid #111'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: 700,
      color: '#111',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, children));
}
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#6F6F6F',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      fontWeight: 700
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: '#111'
    }
  }, children));
}
function DetailScreen({
  startup,
  onBack
}) {
  const s = startup;
  const connected = window.PEOPLE.filter(p => p.company === s.company_name);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: '#6F6F6F',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "ChevronLeft",
    size: 14
  }), " Startups"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 0,
      background: '#111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "Building2",
    size: 22,
    style: {
      color: '#fff'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 31,
      fontWeight: 700,
      letterSpacing: '-0.015em'
    }
  }, s.company_name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 7
    }
  }, /*#__PURE__*/React.createElement(window.SectorBadge, {
    sector: s.sector
  }), /*#__PURE__*/React.createElement("a", {
    href: 'https://' + s.website_url,
    target: "_blank",
    style: {
      fontSize: 13,
      color: '#111',
      textDecoration: 'none',
      borderBottom: '2px solid #E1251B',
      paddingBottom: 1
    }
  }, s.website_url, " \u2197")))), /*#__PURE__*/React.createElement(window.Button, {
    variant: "outline",
    icon: "SquarePen"
  }, "Edit"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      color: '#4A4A4A',
      lineHeight: 1.4,
      maxWidth: 680
    }
  }, s.short_overview), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DetailCard, {
    title: "Company Overview"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Sector"
  }, s.sector), /*#__PURE__*/React.createElement(Field, {
    label: "Category"
  }, s.category), /*#__PURE__*/React.createElement(Field, {
    label: "Technology"
  }, s.technology), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#6F6F6F',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      fontWeight: 700
    }
  }, "Keywords"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 2
    }
  }, s.keywords.map(k => /*#__PURE__*/React.createElement(window.Chip, {
    key: k
  }, k))))), /*#__PURE__*/React.createElement(DetailCard, {
    title: "Funding"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Stage"
  }, /*#__PURE__*/React.createElement(window.Chip, null, s.funding_stage)), /*#__PURE__*/React.createElement(Field, {
    label: "Total Funding"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500
    }
  }, s.total_funding)), /*#__PURE__*/React.createElement(Field, {
    label: "Founded"
  }, s.founded_year), /*#__PURE__*/React.createElement(Field, {
    label: "Employees"
  }, s.employees)), /*#__PURE__*/React.createElement(DetailCard, {
    title: "Location"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "City"
  }, s.city), /*#__PURE__*/React.createElement(Field, {
    label: "Country"
  }, s.country), /*#__PURE__*/React.createElement(Field, {
    label: "Region"
  }, s.region)), /*#__PURE__*/React.createElement(DetailCard, {
    title: "Connected Nodes"
  }, connected.length ? connected.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 0',
      borderBottom: '1px solid #DBDBDB'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 0,
      background: '#111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "User",
    size: 15,
    style: {
      color: '#fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: 500
    }
  }, p.full_name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      color: '#6F6F6F',
      fontFamily: 'var(--font-mono)'
    }
  }, p.role, " \xB7 works_at")))) : /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: '#6F6F6F'
    }
  }, "No connected nodes yet."))));
}
Object.assign(window, {
  DetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecosystem-db/DetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecosystem-db/HomeScreen.jsx
try { (() => {
/* HomeScreen — news feed + recent activity columns. From src/app/home/page.tsx */

function NewsCard({
  item
}) {
  const isFunding = item.category === 'Funding';
  return /*#__PURE__*/React.createElement("a", {
    className: "eds-newscard"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: '#6F6F6F',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, item.source), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: '#9B9B9B'
    }
  }, item.date)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: 700,
      color: '#111',
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, item.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      color: '#6F6F6F',
      lineHeight: 1.4,
      flex: 1,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, item.summary), /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      fontSize: 9,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      padding: '2px 7px',
      borderRadius: 0,
      marginTop: 'auto',
      background: isFunding ? '#E1251B' : '#fff',
      color: isFunding ? '#fff' : '#111',
      border: isFunding ? '1px solid #E1251B' : '1px solid #111'
    }
  }, item.category));
}
function ActivityRow({
  name,
  color,
  tag,
  meta,
  time
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eds-arow"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: 500,
      color: '#111',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 3
    }
  }, tag && color && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: color,
      flexShrink: 0
    }
  }), (tag || meta) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#6F6F6F'
    }
  }, [tag, meta].filter(Boolean).join(' · ')))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: '#9B9B9B',
      flexShrink: 0
    }
  }, time));
}
function ActivityColumn({
  title,
  onViewAll,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      background: '#fff',
      border: '1px solid #111',
      borderRadius: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 12px',
      borderBottom: '2px solid #111'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: '#111'
    }
  }, title), /*#__PURE__*/React.createElement("a", {
    className: "eds-viewall",
    onClick: onViewAll
  }, "View all \u2192")), children);
}
function HomeScreen({
  onNavigate
}) {
  const times = ['3h', '1d', '2d', '4d'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '8px 4px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 31,
      fontWeight: 700,
      letterSpacing: '-0.015em',
      color: '#111'
    }
  }, "Home"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: '#6F6F6F'
    }
  }, "Showing:"), /*#__PURE__*/React.createElement("select", {
    style: {
      fontSize: 14,
      border: '1px solid #111',
      borderRadius: 0,
      padding: '6px 10px',
      background: '#fff',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("option", null, "All regions"), /*#__PURE__*/React.createElement("option", null, "Europe"), /*#__PURE__*/React.createElement("option", null, "North America")))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(window.Eyebrow, null, "Agrifoodtech News"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12,
      marginTop: 16
    }
  }, window.NEWS.map((n, i) => /*#__PURE__*/React.createElement(NewsCard, {
    key: i,
    item: n
  })))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(window.Eyebrow, null, "Recent Activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(ActivityColumn, {
    title: "Latest Startups",
    onViewAll: () => onNavigate('startups')
  }, window.STARTUPS.slice(0, 4).map((s, i) => /*#__PURE__*/React.createElement(ActivityRow, {
    key: s.id,
    name: s.company_name,
    color: window.sectorColor(s.sector),
    tag: s.sector,
    meta: s.country,
    time: times[i]
  }))), /*#__PURE__*/React.createElement(ActivityColumn, {
    title: "Latest Investors",
    onViewAll: () => onNavigate('investors')
  }, window.INVESTORS.slice(0, 4).map((iv, i) => /*#__PURE__*/React.createElement(ActivityRow, {
    key: iv.id,
    name: iv.investor_name,
    meta: `${iv.investor_type} · ${iv.country}`,
    time: times[i]
  }))), /*#__PURE__*/React.createElement(ActivityColumn, {
    title: "Latest People",
    onViewAll: () => onNavigate('people')
  }, window.PEOPLE.map((p, i) => /*#__PURE__*/React.createElement(ActivityRow, {
    key: p.id,
    name: p.full_name,
    meta: `${p.role} · ${p.company}`,
    time: times[i]
  }))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecosystem-db/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecosystem-db/Icon.jsx
try { (() => {
/* Icon — renders a Lucide glyph from the UMD `lucide` global.
   Lucide is the app's only icon system (lucide-react). Names are PascalCase. */
function Icon({
  name,
  size = 16,
  strokeWidth = 2,
  className,
  style
}) {
  const node = window.lucide && window.lucide.icons && window.lucide.icons[name];
  if (!node) return null;
  // IconNode = [tag, attrs, children?] | array of such children
  const children = Array.isArray(node[0]) ? node : node.slice(2);
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    style
  }, children.map((c, i) => React.createElement(c[0], {
    key: i,
    ...c[1]
  })));
}
Object.assign(window, {
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecosystem-db/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecosystem-db/LoginScreen.jsx
try { (() => {
/* LoginScreen — Google OAuth card, faithful to src/app/login/page.tsx */

function LoginScreen({
  onSignIn
}) {
  const [loading, setLoading] = React.useState(false);
  const handle = () => {
    setLoading(true);
    setTimeout(() => {
      onSignIn();
    }, 650);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      minHeight: '100%',
      background: '#F4F4F2'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 360,
      background: '#fff',
      borderRadius: 0,
      boxShadow: 'var(--shadow-md)',
      border: '1px solid #111',
      borderTop: '4px solid #E1251B',
      padding: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo.svg",
    alt: "Eatable Adventures",
    style: {
      height: 88,
      width: 'auto',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#111',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.14em'
    }
  }, "Startup Intelligence")), /*#__PURE__*/React.createElement("button", {
    onClick: handle,
    disabled: loading,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      background: '#fff',
      color: '#111',
      border: '1px solid #111',
      padding: '12px',
      borderRadius: 0,
      cursor: 'pointer',
      fontWeight: 500,
      fontSize: 16,
      fontFamily: 'var(--font-sans)',
      opacity: loading ? .5 : 1
    }
  }, loading ? /*#__PURE__*/React.createElement(window.Icon, {
    name: "LoaderCircle",
    size: 20,
    className: "spin"
  }) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
  })), "Continue with Google"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 13,
      color: '#6F6F6F'
    }
  }, "Access is granted by your administrator")));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecosystem-db/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecosystem-db/Primitives.jsx
try { (() => {
/* Shared primitives for the Ecosystem DB kit — flat, bordered, monochrome. */

/* SectorBadge — austere: ink outline chip with a small sector-color square (data encoding). */
function SectorBadge({
  sector,
  size = 'sm'
}) {
  if (!sector) return React.createElement('span', {
    style: {
      color: '#9B9B9B'
    }
  }, '—');
  const fz = size === 'xs' ? 10 : 11;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: '#fff',
      color: '#111',
      border: '1px solid #111',
      fontSize: fz,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      padding: '2px 8px',
      borderRadius: 0,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: window.sectorColor(sector),
      flexShrink: 0
    }
  }), sector);
}
function Chip({
  children,
  tone = 'gray'
}) {
  const map = {
    gray: {
      bg: '#fff',
      fg: '#111',
      bd: '#111'
    },
    outline: {
      bg: '#fff',
      fg: '#111',
      bd: '#111'
    },
    dark: {
      bg: '#111',
      fg: '#fff',
      bd: '#111'
    },
    red: {
      bg: '#E1251B',
      fg: '#fff',
      bd: '#E1251B'
    }
  };
  const t = map[tone] || map.gray;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      fontSize: 11,
      fontWeight: 600,
      padding: '2px 9px',
      borderRadius: 0,
      whiteSpace: 'nowrap'
    }
  }, children);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  type,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    className: `eds-btn ${size} ${variant}`,
    style: style
  }, icon && /*#__PURE__*/React.createElement(window.Icon, {
    name: icon,
    size: size === 'sm' ? 13 : 16
  }), children);
}

/* Card — the recurring unit: white, 1px border, rounded-xl. */
function Card({
  children,
  style,
  hover,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: `eds-card ${hover ? 'hoverable' : ''}`,
    style: style
  }, children);
}
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.14em',
      color: '#111',
      borderBottom: '2px solid #111',
      paddingBottom: 6
    }
  }, children);
}
Object.assign(window, {
  SectorBadge,
  Chip,
  Button,
  Card,
  Eyebrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecosystem-db/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecosystem-db/Sidebar.jsx
try { (() => {
/* Sidebar — collapsible icon rail (52px → 200px), faithful to src/components/sidebar.tsx.
   Interactive states use CSS classes (.eds-nav) so they survive re-renders. */

const NAV_GROUPS = [{
  label: 'MAIN',
  items: [{
    key: 'home',
    label: 'Home',
    icon: 'House'
  }]
}, {
  label: 'DB',
  items: [{
    key: 'startups',
    label: 'Startups',
    icon: 'Building2'
  }, {
    key: 'investors',
    label: 'Investors',
    icon: 'TrendingUp'
  }, {
    key: 'corporate',
    label: 'Corporate',
    icon: 'Briefcase'
  }, {
    key: 'people',
    label: 'People',
    icon: 'Users'
  }]
}, {
  label: 'TOOLS',
  items: [{
    key: 'rounds',
    label: 'Rounds Inbox',
    icon: 'Inbox'
  }, {
    key: 'explorer',
    label: 'Data Explorer',
    icon: 'ChartColumn'
  }, {
    key: 'graph',
    label: 'Graph',
    icon: 'Network'
  }, {
    key: 'programs',
    label: 'Programs',
    icon: 'FolderKanban'
  }, {
    key: 'watchlists',
    label: 'Watchlists',
    icon: 'Bookmark'
  }, {
    key: 'scout',
    label: 'Scout',
    icon: 'Telescope',
    disabled: true
  }]
}];
function NavItem({
  item,
  active,
  expanded,
  onClick
}) {
  const isActive = active === item.key;
  const cls = ['eds-nav', expanded ? 'expanded' : 'collapsed', isActive ? 'active' : '', item.disabled ? 'disabled' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("a", {
    className: cls,
    onClick: () => !item.disabled && onClick(item.key),
    title: !expanded ? item.label : undefined
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: item.icon,
    size: 16
  }), expanded && /*#__PURE__*/React.createElement("span", {
    className: "eds-nav-label"
  }, item.label, item.disabled && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9B9B9B'
    }
  }, " (soon)")));
}
function Sidebar({
  active,
  expanded,
  onToggle,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      height: '100%',
      background: '#fff',
      borderRight: '1px solid #111',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      padding: '12px 0',
      gap: 4,
      overflow: 'hidden',
      transition: 'width .2s',
      width: expanded ? 200 : 52,
      alignItems: expanded ? 'stretch' : 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 8,
      width: '100%',
      padding: expanded ? '0 12px' : 0,
      justifyContent: expanded ? 'space-between' : 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 0,
      background: '#E1251B',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#fff'
    }
  }, "EA")), expanded && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: '#111',
      flex: 1,
      marginLeft: 10,
      whiteSpace: 'nowrap'
    }
  }, "Eatable Adventures"), /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    className: "eds-iconbtn",
    style: {
      color: '#6F6F6F'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: expanded ? 'ChevronLeft' : 'ChevronRight',
    size: 14
  }))), NAV_GROUPS.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: g.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      width: '100%',
      padding: expanded ? '0 8px' : '0 6px',
      alignItems: expanded ? 'stretch' : 'center',
      marginTop: gi > 0 ? 8 : 0,
      paddingTop: gi > 0 ? 8 : 0,
      borderTop: gi > 0 ? '1px solid #DBDBDB' : 'none'
    }
  }, expanded && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.12em',
      color: '#6F6F6F',
      padding: '0 8px 4px'
    }
  }, g.label), g.items.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.key,
    item: it,
    active: active,
    expanded: expanded,
    onClick: onNavigate
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      width: '100%',
      padding: expanded ? '0 8px' : '0 6px',
      display: 'flex',
      alignItems: expanded ? 'stretch' : 'center'
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    item: {
      key: 'settings',
      label: 'Settings',
      icon: 'Settings'
    },
    active: active,
    expanded: expanded,
    onClick: onNavigate
  })));
}
Object.assign(window, {
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecosystem-db/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecosystem-db/StartupsScreen.jsx
try { (() => {
/* StartupsScreen — filterable / sortable entity table. From EntityList.tsx + startups/page.tsx */

function StartupsScreen({
  query,
  onOpen
}) {
  const [filtersOpen, setFiltersOpen] = React.useState(false);
  const [filters, setFilters] = React.useState({
    sector: '',
    stage: '',
    location: ''
  });
  const [sort, setSort] = React.useState({
    key: 'company_name',
    dir: 'asc'
  });
  const setFilter = (k, v) => setFilters(f => ({
    ...f,
    [k]: v
  }));
  const activeCount = Object.values(filters).filter(v => v.trim()).length;
  let rows = window.STARTUPS.filter(s => {
    if (query && query.trim() && !s.company_name.toLowerCase().includes(query.toLowerCase())) return false;
    if (filters.sector && s.sector !== filters.sector) return false;
    if (filters.stage && s.funding_stage !== filters.stage) return false;
    if (filters.location) {
      const q = filters.location.toLowerCase();
      if (!`${s.city} ${s.country} ${s.region}`.toLowerCase().includes(q)) return false;
    }
    return true;
  });
  rows = [...rows].sort((a, b) => {
    const av = String(a[sort.key] ?? '').toLowerCase(),
      bv = String(b[sort.key] ?? '').toLowerCase();
    const c = av.localeCompare(bv, undefined, {
      numeric: true
    });
    return sort.dir === 'asc' ? c : -c;
  });
  const toggleSort = k => setSort(s => s.key === k ? {
    key: k,
    dir: s.dir === 'asc' ? 'desc' : 'asc'
  } : {
    key: k,
    dir: 'asc'
  });
  const COLS = [{
    key: 'company_name',
    label: 'Company'
  }, {
    key: 'sector',
    label: 'Sector'
  }, {
    key: 'funding_stage',
    label: 'Stage'
  }, {
    key: 'country',
    label: 'Location'
  }, {
    key: 'founded_year',
    label: 'Founded'
  }, {
    key: 'employees',
    label: 'Employees'
  }];
  const Th = ({
    col
  }) => /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '10px 14px',
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: '#111'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => toggleSort(col.key),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      font: 'inherit',
      color: 'inherit',
      textTransform: 'inherit',
      letterSpacing: 'inherit',
      padding: 0
    }
  }, col.label, /*#__PURE__*/React.createElement(window.Icon, {
    name: sort.key === col.key ? sort.dir === 'asc' ? 'ChevronUp' : 'ChevronDown' : 'ChevronsUpDown',
    size: 12,
    style: {
      color: sort.key === col.key ? '#E1251B' : '#C2C2C2'
    }
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 31,
      fontWeight: 700,
      letterSpacing: '-0.015em'
    }
  }, "Startups"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 14,
      color: '#6F6F6F'
    }
  }, "Browse and filter all startups")), /*#__PURE__*/React.createElement(window.Button, {
    icon: "Plus"
  }, "Add Startup")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    key: 'fb-' + (filtersOpen || activeCount > 0),
    onClick: () => setFiltersOpen(v => !v),
    className: `eds-filterbtn ${filtersOpen || activeCount ? 'on' : ''}`
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "SlidersHorizontal",
    size: 14
  }), " Filters", activeCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#fff',
      color: '#111',
      fontSize: 10,
      fontWeight: 700,
      padding: '1px 6px',
      borderRadius: 0
    }
  }, activeCount)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: '#6F6F6F'
    }
  }, rows.length, " total"), /*#__PURE__*/React.createElement(window.Button, {
    variant: "outline",
    size: "sm",
    icon: "Download"
  }, "Export"))), filtersOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: '#fff',
      border: '1px solid #111',
      borderRadius: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(FilterField, {
    label: "Sector"
  }, /*#__PURE__*/React.createElement("select", {
    value: filters.sector,
    onChange: e => setFilter('sector', e.target.value),
    style: selStyle
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "All"), window.SECTORS.map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement(FilterField, {
    label: "Stage"
  }, /*#__PURE__*/React.createElement("select", {
    value: filters.stage,
    onChange: e => setFilter('stage', e.target.value),
    style: selStyle
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "All"), window.FUNDING_STAGES.map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement(FilterField, {
    label: "Location"
  }, /*#__PURE__*/React.createElement("input", {
    value: filters.location,
    onChange: e => setFilter('location', e.target.value),
    placeholder: "City, country, or region",
    style: inpStyle
  })), activeCount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setFilters({
      sector: '',
      stage: '',
      location: ''
    }),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: '#E1251B',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "X",
    size: 12
  }), " Clear filters")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid #111',
      borderRadius: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", {
    style: {
      background: '#fff',
      borderBottom: '2px solid #111'
    }
  }, /*#__PURE__*/React.createElement("tr", null, COLS.map(c => /*#__PURE__*/React.createElement(Th, {
    key: c.key,
    col: c
  })), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 56
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(s => /*#__PURE__*/React.createElement(Row, {
    key: s.id,
    s: s,
    onOpen: onOpen
  })), rows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 7,
    style: {
      padding: '48px',
      textAlign: 'center',
      color: '#6F6F6F',
      fontSize: 14
    }
  }, "No results found."))))), rows.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: '#6F6F6F'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "Rows per page:"), /*#__PURE__*/React.createElement("select", {
    style: {
      ...selStyle,
      width: 'auto',
      padding: '4px 8px'
    }
  }, /*#__PURE__*/React.createElement("option", null, "25"), /*#__PURE__*/React.createElement("option", null, "50"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "1\u2013", rows.length, " of ", rows.length), /*#__PURE__*/React.createElement("button", {
    style: pgBtn(true),
    disabled: true
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "ChevronLeft",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    style: pgBtn(true),
    disabled: true
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "ChevronRight",
    size: 16
  })))));
}
function Row({
  s,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("tr", {
    className: "eds-trow"
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("a", {
    className: "eds-link",
    onClick: () => onOpen(s)
  }, s.company_name)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement(window.SectorBadge, {
    sector: s.sector,
    size: "xs"
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: '#6F6F6F'
    }
  }, s.funding_stage), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: '#6F6F6F'
    }
  }, s.city, ", ", s.country), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: '#6F6F6F',
      fontVariantNumeric: 'tabular-nums'
    }
  }, s.founded_year), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: '#6F6F6F',
      fontVariantNumeric: 'tabular-nums'
    }
  }, s.employees), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    title: "Add to watchlist",
    className: "eds-iconbtn"
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "Bookmark",
    size: 14
  })))));
}
function FilterField({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: '#111',
      marginBottom: 5
    }
  }, label), children);
}
const selStyle = {
  width: '100%',
  padding: '7px 10px',
  fontSize: 13,
  border: '1px solid #111',
  borderRadius: 0,
  background: '#fff',
  fontFamily: 'var(--font-sans)',
  boxSizing: 'border-box',
  cursor: 'pointer'
};
const inpStyle = {
  width: '100%',
  padding: '7px 10px',
  fontSize: 13,
  border: '1px solid #111',
  borderRadius: 0,
  fontFamily: 'var(--font-sans)',
  boxSizing: 'border-box'
};
const td = {
  padding: '11px 14px'
};
const pgBtn = dis => ({
  padding: 4,
  borderRadius: 0,
  background: 'none',
  border: 'none',
  cursor: dis ? 'not-allowed' : 'pointer',
  opacity: dis ? .3 : 1,
  display: 'flex',
  color: '#6F6F6F'
});
Object.assign(window, {
  StartupsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecosystem-db/StartupsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecosystem-db/TopBar.jsx
try { (() => {
/* TopBar — breadcrumb · global search pill · bug icon · user. From src/components/top-bar.tsx */

const CRUMB = {
  home: 'Home',
  startups: 'Startups',
  investors: 'Investors',
  corporate: 'Corporate',
  people: 'People',
  graph: 'Graph',
  programs: 'Programs',
  watchlists: 'Watchlists',
  explorer: 'Data Explorer',
  rounds: 'Rounds Inbox',
  settings: 'Settings'
};
function TopBar({
  active,
  detailLabel,
  query,
  setQuery,
  count
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      borderBottom: '1px solid #111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      background: '#fff',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      minWidth: 160,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: detailLabel ? '#6F6F6F' : '#111',
      fontWeight: detailLabel ? 500 : 700
    }
  }, CRUMB[active] || 'Home'), detailLabel && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.Icon, {
    name: "ChevronRight",
    size: 14,
    style: {
      color: '#C2C2C2'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#111',
      fontWeight: 700
    }
  }, detailLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 288,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "Search",
    size: 16,
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9B9B9B'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search startups, investors...",
    className: "eds-search-input",
    style: {
      width: '100%',
      padding: '9px 16px 9px 36px',
      border: '1px solid #111',
      borderRadius: 0,
      fontSize: 14,
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      outline: 'none'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexShrink: 0
    }
  }, count != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 8px',
      background: '#F4F4F2',
      border: '1px solid #DBDBDB',
      borderRadius: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: '#111'
    }
  }, "Startups"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#6F6F6F',
      fontVariantNumeric: 'tabular-nums'
    }
  }, count)), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#6F6F6F',
      display: 'flex',
      padding: 8,
      borderRadius: 0
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "Bug",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#111'
    }
  }, "Jos\xE9 Caba\xF1ero"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: '#111',
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      fontWeight: 700,
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "Log Out")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 0,
      background: '#111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "User",
    size: 16,
    style: {
      color: '#fff'
    }
  }))));
}
Object.assign(window, {
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecosystem-db/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecosystem-db/data.jsx
try { (() => {
/* Mock dataset for the Ecosystem DB UI kit — agrifood-tech startups,
   investors, people and news. Shapes mirror src/types in the app. */

const SECTORS = ['Agritech', 'Innovative Food', 'Food Logistics & Delivery', 'In-store Retail & Restaurant Tech', 'Kitchen & Cooking Tech', 'Food as a Medicine'];
const SECTOR_COLORS = {
  'Agritech': '#1D9E75',
  'Innovative Food': '#639922',
  'Food Logistics & Delivery': '#EF9F27',
  'In-store Retail & Restaurant Tech': '#D85A30',
  'Kitchen & Cooking Tech': '#97C459',
  'Food as a Medicine': '#7F77DD'
};
const sectorColor = s => SECTOR_COLORS[s] || '#888780';
const NODE_COLORS = {
  startup: '#2563eb',
  investor: '#16a34a',
  person: '#9333ea',
  corporate: '#ea580c'
};
const FUNDING_STAGES = ['Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C', 'Growth', 'Bootstrapped', 'Grant'];
const STARTUPS = [{
  id: 's1',
  company_name: 'Mosa Meat',
  sector: 'Food as a Medicine',
  category: 'New Food Products',
  technology: 'Cultivated meat',
  funding_stage: 'Series B',
  city: 'Maastricht',
  country: 'Netherlands',
  region: 'Europe',
  founded_year: 2016,
  employees: 160,
  total_funding: '$96M',
  website_url: 'mosameat.com',
  keywords: ['cultivated meat', 'cell-ag', 'beef'],
  short_overview: 'Cultivated beef grown directly from animal cells, without slaughter.'
}, {
  id: 's2',
  company_name: 'Apeel Sciences',
  sector: 'Food Logistics & Delivery',
  category: 'Packaging',
  technology: 'Edible coating',
  funding_stage: 'Growth',
  city: 'Santa Barbara',
  country: 'United States',
  region: 'North America',
  founded_year: 2012,
  employees: 480,
  total_funding: '$640M',
  website_url: 'apeel.com',
  keywords: ['shelf-life', 'food waste', 'coating'],
  short_overview: 'Plant-based coatings that double the shelf life of fresh produce.'
}, {
  id: 's3',
  company_name: 'Infarm',
  sector: 'Agritech',
  category: 'New Cultivation Systems',
  technology: 'Vertical farming',
  funding_stage: 'Series C',
  city: 'Berlin',
  country: 'Germany',
  region: 'Europe',
  founded_year: 2013,
  employees: 600,
  total_funding: '$600M',
  website_url: 'infarm.com',
  keywords: ['vertical farming', 'indoor', 'leafy greens'],
  short_overview: 'Modular vertical farms deployed directly in grocery stores and hubs.'
}, {
  id: 's4',
  company_name: 'Mycorena',
  sector: 'Innovative Food',
  category: 'New Ingredients',
  technology: 'Fermentation',
  funding_stage: 'Series A',
  city: 'Gothenburg',
  country: 'Sweden',
  region: 'Europe',
  founded_year: 2017,
  employees: 70,
  total_funding: '$48M',
  website_url: 'mycorena.com',
  keywords: ['mycoprotein', 'fermentation', 'protein'],
  short_overview: 'Fungi-based mycoprotein ingredient for the next generation of meat alternatives.'
}, {
  id: 's5',
  company_name: 'NotCo',
  sector: 'Innovative Food',
  category: 'New Food Products',
  technology: 'AI formulation',
  funding_stage: 'Series D',
  city: 'Santiago',
  country: 'Chile',
  region: 'LATAM',
  founded_year: 2015,
  employees: 300,
  total_funding: '$420M',
  website_url: 'notco.com',
  keywords: ['plant-based', 'AI', 'dairy'],
  short_overview: 'Uses AI ("Giuseppe") to reformulate animal products from plants.'
}, {
  id: 's6',
  company_name: 'Aerofarms',
  sector: 'Agritech',
  category: 'New Cultivation Systems',
  technology: 'Aeroponics',
  funding_stage: 'Series C',
  city: 'Newark',
  country: 'United States',
  region: 'North America',
  founded_year: 2004,
  employees: 200,
  total_funding: '$238M',
  website_url: 'aerofarms.com',
  keywords: ['aeroponics', 'vertical farming'],
  short_overview: 'Indoor vertical farming using aeroponic mist and no soil.'
}, {
  id: 's7',
  company_name: 'Wasteless',
  sector: 'In-store Retail & Restaurant Tech',
  category: 'Retail Analytics Platform',
  technology: 'Dynamic pricing',
  funding_stage: 'Seed',
  city: 'Tel Aviv',
  country: 'Israel',
  region: 'Middle East',
  founded_year: 2016,
  employees: 45,
  total_funding: '$8M',
  website_url: 'wasteless.com',
  keywords: ['dynamic pricing', 'food waste', 'retail'],
  short_overview: 'AI dynamic pricing that cuts grocery food waste at the shelf.'
}, {
  id: 's8',
  company_name: 'Karakuri',
  sector: 'Kitchen & Cooking Tech',
  category: 'Cooking Robots',
  technology: 'Robotics',
  funding_stage: 'Seed',
  city: 'London',
  country: 'United Kingdom',
  region: 'Europe',
  founded_year: 2018,
  employees: 35,
  total_funding: '$10M',
  website_url: 'karakuri.com',
  keywords: ['robotics', 'automation', 'kitchen'],
  short_overview: 'Robotic systems that assemble customised meals at scale.'
}, {
  id: 's9',
  company_name: 'DayTwo',
  sector: 'Food as a Medicine',
  category: 'Personalized Nutrition',
  technology: 'Microbiome',
  funding_stage: 'Series C',
  city: 'Boston',
  country: 'United States',
  region: 'North America',
  founded_year: 2015,
  employees: 120,
  total_funding: '$170M',
  website_url: 'daytwo.com',
  keywords: ['microbiome', 'personalised nutrition', 'metabolic'],
  short_overview: 'Gut-microbiome analysis driving personalised nutrition for metabolic health.'
}, {
  id: 's10',
  company_name: 'Olive Robotics',
  sector: 'Agritech',
  category: 'Crop Automation & Robotics',
  technology: 'Robotics',
  funding_stage: 'Pre-seed',
  city: 'Valencia',
  country: 'Spain',
  region: 'Europe',
  founded_year: 2021,
  employees: 12,
  total_funding: '$2M',
  website_url: 'oliverobotics.io',
  keywords: ['robotics', 'harvesting', 'orchard'],
  short_overview: 'Autonomous robots for selective olive and fruit harvesting.'
}, {
  id: 's11',
  company_name: 'Phenix',
  sector: 'Food Logistics & Delivery',
  category: 'Waste Management',
  technology: 'Marketplace',
  funding_stage: 'Series B',
  city: 'Paris',
  country: 'France',
  region: 'Europe',
  founded_year: 2014,
  employees: 200,
  total_funding: '$50M',
  website_url: 'wearephenix.com',
  keywords: ['food waste', 'redistribution', 'marketplace'],
  short_overview: 'Connects retailers with charities and consumers to redistribute unsold food.'
}, {
  id: 's12',
  company_name: 'Cana',
  sector: 'Kitchen & Cooking Tech',
  category: 'Cloud Kitchen',
  technology: 'Molecular printing',
  funding_stage: 'Series A',
  city: 'Redwood City',
  country: 'United States',
  region: 'North America',
  founded_year: 2019,
  employees: 90,
  total_funding: '$30M',
  website_url: 'cana.com',
  keywords: ['beverage', 'molecular', 'appliance'],
  short_overview: 'A molecular beverage printer that makes any drink from cartridges.'
}];
const INVESTORS = [{
  id: 'i1',
  investor_name: 'Astanor Ventures',
  investor_type: 'Venture Capital',
  country: 'Belgium',
  region: 'Europe',
  aum: '$1.2B',
  focus_areas: ['agritech', 'sustainability', 'impact']
}, {
  id: 'i2',
  investor_name: 'AgFunder',
  investor_type: 'Venture Capital',
  country: 'United States',
  region: 'North America',
  aum: '$300M',
  focus_areas: ['agrifoodtech', 'early-stage']
}, {
  id: 'i3',
  investor_name: 'Five Seasons Ventures',
  investor_type: 'Venture Capital',
  country: 'France',
  region: 'Europe',
  aum: '$250M',
  focus_areas: ['foodtech', 'consumer']
}, {
  id: 'i4',
  investor_name: 'Eatable Adventures',
  investor_type: 'Corporate VC',
  country: 'Spain',
  region: 'Europe',
  aum: '—',
  focus_areas: ['foodtech', 'agritech', 'acceleration']
}, {
  id: 'i5',
  investor_name: 'Big Idea Ventures',
  investor_type: 'Impact Fund',
  country: 'United States',
  region: 'North America',
  aum: '$200M',
  focus_areas: ['alt-protein', 'sustainability']
}];
const PEOPLE = [{
  id: 'p1',
  full_name: 'Maarten Bosch',
  role: 'CEO',
  company: 'Mosa Meat',
  company_type: 'Startup',
  expertise: ['cell-ag', 'operations'],
  country: 'Netherlands'
}, {
  id: 'p2',
  full_name: 'Matías Muchnick',
  role: 'Founder & CEO',
  company: 'NotCo',
  company_type: 'Startup',
  expertise: ['AI', 'product'],
  country: 'Chile'
}, {
  id: 'p3',
  full_name: 'Ramkumar Nair',
  role: 'Founder & CEO',
  company: 'Mycorena',
  company_type: 'Startup',
  expertise: ['fermentation', 'science'],
  country: 'Sweden'
}, {
  id: 'p4',
  full_name: 'Bernard Lukey',
  role: 'Partner',
  company: 'AgFunder',
  company_type: 'Investor',
  expertise: ['venture', 'agrifood'],
  country: 'United States'
}];
const NEWS = [{
  source: 'AgFunderNews',
  date: '2d',
  category: 'Funding',
  title: 'Cultivated-meat scale-up closes €40M Series B',
  summary: 'European cell-ag leader raises growth round to build a pilot production facility.'
}, {
  source: 'Sifted',
  date: '3d',
  category: 'Market',
  title: 'Foodtech funding rebounds in Q1 across Europe',
  summary: 'Early-stage agrifood deals up 18% as investors return to fundamentals.'
}, {
  source: 'TechCrunch',
  date: '4d',
  category: 'Technology',
  title: 'AI reformulation cuts plant-based dev time in half',
  summary: 'New models compress months of R&D into days for alt-dairy products.'
}, {
  source: 'Reuters',
  date: '5d',
  category: 'Policy',
  title: 'EU greenlights two novel-food applications',
  summary: 'Regulatory clearance opens the single market to precision-fermented proteins.'
}, {
  source: 'Forbes',
  date: '6d',
  category: 'People',
  title: 'Veteran retail exec joins agritech board',
  summary: 'Former grocery COO takes advisory seat at a vertical-farming scale-up.'
}, {
  source: 'AgFunderNews',
  date: '1w',
  category: 'Funding',
  title: 'Robotics harvesting startup raises seed',
  summary: 'Autonomous orchard robots attract early backing from impact funds.'
}];
const TAG_COLORS = {
  Funding: ['#dcfce7', '#15803d'],
  Technology: ['#dbeafe', '#1d4ed8'],
  Market: ['#fef3c7', '#b45309'],
  Policy: ['#f3e8ff', '#7e22ce'],
  People: ['#ffe4e6', '#be123c']
};
Object.assign(window, {
  SECTORS,
  SECTOR_COLORS,
  sectorColor,
  NODE_COLORS,
  FUNDING_STAGES,
  STARTUPS,
  INVESTORS,
  PEOPLE,
  NEWS,
  TAG_COLORS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecosystem-db/data.jsx", error: String((e && e.message) || e) }); }

})();
