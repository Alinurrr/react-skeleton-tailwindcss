import Articles from "./components/Articles";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <header className="bg-indigo-500 p-4">
        <h1 className="text-white text-2xl font-semibold max-w-7xl">React Skeletons React TailwindCSS</h1>
      </header>
      <div className="w-full max-w-7xl mx-auto p-10 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Articles />
        </div>
        <div className="col-span-1">
          <User />
        </div>
      </div>
    </div>
  );
}

export default App;
