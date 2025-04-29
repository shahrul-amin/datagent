// components/Header.jsx
export default function Header() {
    return (
      <header className="mt-5 mb-8 ml-5">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          Hello, Researcher
        </h1>
        <h4 className="text-2xl mt-2 text-gray-500">
          What can I help you to analyze today?
        </h4>
      </header>
    );
  }