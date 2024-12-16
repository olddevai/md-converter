import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ConversionOptions } from '../../types';

interface Props {
  output: string;
  options: ConversionOptions;
}

export default function ConversionOutput({ output, options }: Props) {
  if (options.format === 'html' && options.syntaxHighlighting) {
    return (
      <SyntaxHighlighter
        language="html"
        style={atomOneDark}
        className="h-full"
      >
        {output}
      </SyntaxHighlighter>
    );
  }

  return (
    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
      {output}
    </div>
  );
}