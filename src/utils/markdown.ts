import { marked } from 'marked';
import TurndownService from 'turndown';
import { ConversionOptions } from '../types';

const turndownService = new TurndownService();

export const convertMarkdown = (input: string, options: ConversionOptions): string => {
  if (!input) return '';

  switch (options.format) {
    case 'html':
      const html = marked(input);
      return options.syntaxHighlighting ? html : stripSyntaxHighlighting(html);
    case 'txt':
      return convertToPlainText(input, options.preserveLineBreaks);
    case 'md':
      return input;
    default:
      return input;
  }
};

const stripSyntaxHighlighting = (html: string): string => {
  return html.replace(/<pre><code[^>]*>/g, '<pre><code>');
};

const convertToPlainText = (markdown: string, preserveLineBreaks = false): string => {
  let text = markdown
    .replace(/[#*`_]/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/!\[(.*?)\]\(.*?\)/g, '$1');
  
  return preserveLineBreaks ? text : text.replace(/\n\n/g, '\n');
};