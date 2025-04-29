// App.jsx
import { useState, useEffect } from 'react';
import Header from './components/Header';
import ChatMessage from './components/ChatMessage';
import PromptForm from './components/PromptForm';
import useChat from './hooks/useChat';

export default function App() {
  const {
    chats,
    isResponding,
    handleSubmit,
    stopResponse,
    deleteChats,
    fileState,
    handleFile,
    cancelFile
  } = useChat();

  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    setShowChat(chats.length > 0);
  }, [chats]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between text-[22px] font-normal p-5 text-[rgb(78,77,77)]">
          <p>Datagent</p>
          <img src="./user_icon.png" alt="profile" className='w-10 rounded-full'/>
      </div>
        {!showChat && (
          <>
            <Header />
          </>
        )}

        <div className="pb-24">
          {chats.map((chat, index) => (
            <ChatMessage key={index} {...chat} />
          ))}
        </div>

        <PromptForm
          onSubmit={handleSubmit}
          isResponding={isResponding}
          onStop={stopResponse}
          onDelete={deleteChats}
          fileState={fileState}
          onFileChange={handleFile}
          onCancelFile={cancelFile}
        />
      </div>
    </div>
  );
}