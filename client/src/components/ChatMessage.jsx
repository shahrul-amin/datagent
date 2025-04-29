// components/ChatMessage.jsx
export default function ChatMessage({ type, text, file, loading, error }) {
    return (
      <div className={`flex gap-3 my-4 ${type === 'user' ? 'justify-end' : ''}`}>
        {type === 'bot' && (
          <div className="w-10 h-10 rounded-full bg-gray-20 p-1 flex-shrink-0">
            <img 
              src="./gemini_icon.png" 
              alt="Bot" 
              className={`w-full h-full ${loading ? 'animate-spin' : ''}`} 
            />
          </div>
        )}
        
        <div className={`max-w-[75%] p-3 rounded-xl ${
          type === 'user' 
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-100 rounded-bl-none'
        }`}>
          {file?.preview && (
            <div className="mb-2">
              {file.preview.startsWith('data:image/') ? (
                <img 
                  src={file.preview} 
                  alt="Attachment" 
                  className="max-w-full h-auto rounded-lg"
                />
              ) : (
                <div className="flex items-center gap-2 p-2 bg-gray-200 rounded">
                  <span className="material-symbols-rounded">description</span>
                  <span>{file.name}</span>
                </div>
              )}
            </div>
          )}
          <p className={error ? 'text-red-500' : ''}>
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-pulse">...</span>
              </span>
            ) : text}
          </p>
        </div>
      </div>
    );
  }