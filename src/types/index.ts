export interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ConversionOptions {
  format: 'html' | 'txt' | 'md' | 'pdf';
  preserveLineBreaks?: boolean;
  syntaxHighlighting?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  icon?: JSX.Element;
}