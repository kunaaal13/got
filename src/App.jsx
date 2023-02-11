import Main from './components/Main';

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600 min-h-screen w-full py-10">
      <h1 className="text-center text-3xl sm:text-4xl md:text-6xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
        Game Of Thrones
      </h1>

      <Main />
    </div>
  );
}

export default App;
