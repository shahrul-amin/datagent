// components/PromptForm.jsx
import { useState, useRef } from 'react';
import FileUpload from './FileUpload';

export default function PromptForm({
  onSubmit,
  isResponding,
  onStop,
  onDelete,
  fileState,
  onFileChange,
  onCancelFile
}) {
  const [input, setInput] = useState('');
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    onSubmit(input, fileState);
    setInput('');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white py-4">
      <div className="container mx-auto max-w-4xl px-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          {/* File Upload on left */}
          <FileUpload
            fileState={fileState}
            onFileChange={onFileChange}
            onCancelFile={onCancelFile}
            inputRef={fileInputRef}
          />

          {/* Input field in middle */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Gemini"
            className="flex-1 px-6 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Buttons container on right */}
          <div className="ml-auto flex gap-2">
            {isResponding ? (
              <button
                type="button"
                onClick={onStop}
                className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600"
              >
                <span className="material-symbols-rounded">stop_circle</span>
              </button>
            ) : (
              input.trim() && (
                <button
                  type="submit"
                  className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600"
                >
                  <span className="material-symbols-rounded">arrow_upward</span>
                </button>
              )
            )}
          </div>
        </form>
        
        <p className="text-center mt-2 text-sm text-gray-500">
          Datagent can make mistakes, so double-check it.
        </p>
      </div>
    </div>
  );
}