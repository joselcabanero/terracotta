/* Icon — renders a Lucide glyph from the UMD `lucide` global.
   Lucide is the app's only icon system (lucide-react). Names are PascalCase. */
function Icon({ name, size = 16, strokeWidth = 2, className, style }) {
  const node = window.lucide && window.lucide.icons && window.lucide.icons[name];
  if (!node) return null;
  // IconNode = [tag, attrs, children?] | array of such children
  const children = Array.isArray(node[0]) ? node : node.slice(2);
  return React.createElement(
    'svg',
    {
      width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
      stroke: 'currentColor', strokeWidth, strokeLinecap: 'round',
      strokeLinejoin: 'round', className, style,
    },
    children.map((c, i) => React.createElement(c[0], { key: i, ...c[1] }))
  );
}

Object.assign(window, { Icon });
