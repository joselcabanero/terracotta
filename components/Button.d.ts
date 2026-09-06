export interface ButtonProps {
  /** Visual style: primary (EAV Red pill), cta (burgundy), outline, ghost */
  variant?: 'primary' | 'cta' | 'outline' | 'ghost';
  /** Compact size for toolbars/filters */
  size?: 'md' | 'sm';
  /** Optional Material Symbols icon name (e.g. "add", "download") */
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
/** Eatable Adventures button — Rubik pill with the CTA pulse on hover. */
export function Button(props: ButtonProps): JSX.Element;
