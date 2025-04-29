// components/FileUpload.jsx
export default function FileUpload({ fileState, onFileChange, onCancelFile, inputRef }) {
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      onFileChange(file);
    };
  
    return (
      <div className="relative">
        <input
          type="file"
          ref={inputRef}
          onChange={handleFileChange}
          accept="image/*, .pdf, .txt, .csv"
          className="hidden"
        />
        
        {fileState.preview ? (
          <div className="relative">
          {fileState.preview.startsWith('data:image/') ? (
            <img
              src={fileState.preview}
              alt="Preview"
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-secondary-color flex items-center justify-center">
              <span className="material-symbols-rounded text-blue-500">description</span>
            </div>
          )}
            <button
              type="button"
              onClick={onCancelFile}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              <span className="material-symbols-rounded text-sm">close</span>
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => inputRef.current.click()}
            className="w-12 h-12 rounded-full bg-gray-100flex items-center justify-center hover:bg-gray-200"
          >
            <span className="material-symbols-rounded">attach_file</span>
          </button>
        )}
      </div>
    );
  }