export function Button({ variant = 'primary', size = 'md', icon, disabled, onClick, children }) {
  const [hover, setHover] = React.useState(false);
  const base = {
    fontFamily: "'Rubik', system-ui, sans-serif",
    fontSize: size === 'sm' ? 13 : 14,
    fontWeight: 500,
    display: 'inline-flex', alignItems: 'center', gap: 7,
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent', borderRadius: 999,
    padding: size === 'sm' ? '7px 14px' : '10px 18px',
    opacity: disabled ? 0.4 : 1, whiteSpace: 'nowrap',
    transition: 'background .15s, color .15s, border-color .15s, box-shadow .2s',
  };
  const variants = {
    primary: { background: hover && !disabled ? '#9C231F' : '#BC2D29', color: '#fff',
      boxShadow: hover && !disabled ? '0 6px 22px rgba(188,45,41,0.34)' : 'none' },
    cta: { background: '#450E14', color: '#FFF9EE',
      boxShadow: hover && !disabled ? '0 6px 22px rgba(69,14,20,0.34)' : 'none' },
    outline: { background: hover && !disabled ? '#F8E5E2' : '#fff', color: '#BC2D29', borderColor: '#BC2D29' },
    ghost: { background: hover && !disabled ? '#FFF9EE' : 'transparent', color: hover && !disabled ? '#1E1E1E' : '#574E48' },
  };
  return React.createElement('button', {
    style: { ...base, ...variants[variant] },
    disabled, onClick,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
  },
    icon && React.createElement('span', { className: 'material-symbols-outlined', style: { fontSize: size === 'sm' ? 16 : 18, lineHeight: 1 } }, icon),
    children
  );
}
