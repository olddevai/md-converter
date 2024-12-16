import { FileText, Code, Type, Zap, Lock, Download, Globe, Sparkles } from 'lucide-react';
import { Feature } from '../types';

export const FEATURES: Feature[] = [
  {
    icon: FileText,
    title: 'Multiple Format Support',
    description: 'Convert your Markdown to HTML, Plain Text, and preserve original Markdown formatting.',
  },
  {
    icon: Code,
    title: 'Syntax Highlighting',
    description: 'Beautiful syntax highlighting for HTML output with support for multiple themes.',
  },
  {
    icon: Type,
    title: 'Real-time Preview',
    description: 'See your conversions instantly as you type with our real-time preview feature.',
  },
  {
    icon: Zap,
    title: 'Fast & Efficient',
    description: 'Lightning-fast conversions performed entirely in your browser with no server requests.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your content never leaves your device. All processing happens locally.',
  },
  {
    icon: Download,
    title: 'Export Options',
    description: 'Save your converted content in multiple formats with just one click.',
  },
  {
    icon: Globe,
    title: 'Cross-Platform',
    description: 'Works on any device with a modern web browser. No installation needed.',
  },
  {
    icon: Sparkles,
    title: 'Clean Output',
    description: 'Generate clean, standards-compliant output in your chosen format.',
  },
];