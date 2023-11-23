import "./App.css";
import Dashboard from "./components/Dashboard";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <div className="w-full flex">
        <NavigationBar />
        <main className="grow">
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;
