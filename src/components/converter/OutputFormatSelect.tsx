import React from 'react';
import { ConversionOptions } from '../../types';

interface Props {
  options: ConversionOptions;
  onChange: (options: ConversionOptions) => void;
}

export default function OutputFormatSelect({ options, onChange }: Props) {
  return (
    <div className="flex items-center space-x-4">
      <select
        value={options.format}
        onChange={(e) => onChange({ ...options, format: e.target.value as ConversionOptions['format'] })}
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="html">HTML</option>
        <option value="txt">Plain Text</option>
        <option value="md">Markdown</option>
      </select>
      
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          checked={options.preserveLineBreaks}
          onChange={(e) => onChange({ ...options, preserveLineBreaks: e.target.checked })}
          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <span className="ml-2 text-sm text-gray-600">Preserve line breaks</span>
      </label>

      {options.format === 'html' && (
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={options.syntaxHighlighting}
            onChange={(e) => onChange({ ...options, syntaxHighlighting: e.target.checked })}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="ml-2 text-sm text-gray-600">Syntax highlighting</span>
        </label>
      )}
    </div>
  );
}