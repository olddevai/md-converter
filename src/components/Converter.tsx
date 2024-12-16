import React, { useState, useEffect } from 'react';
import { convertMarkdown } from '../utils/markdown';
import { ConversionOptions } from '../types';
import OutputFormatSelect from './converter/OutputFormatSelect';
import ConversionOutput from './converter/ConversionOutput';
import CopyButton from './converter/CopyButton';

export default function Converter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [options, setOptions] = useState<ConversionOptions>({
    format: 'html',
    preserveLineBreaks: false,
    syntaxHighlighting: true,
  });

  useEffect(() => {
    const result = convertMarkdown(input, options);
    setOutput(result);
  }, [input, options]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Input (Markdown)</h2>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-[500px] p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your markdown here..."
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Output</h2>
            <div className="flex items-center space-x-4">
              <OutputFormatSelect options={options} onChange={setOptions} />
              <CopyButton text={output} />
            </div>
          </div>
          <div className="w-full h-[500px] overflow-auto rounded-lg bg-gray-50 border">
            <ConversionOutput output={output} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}