import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="app">
      {/* SIDEBAR */}
      <Sidebar />

      {/* FEED */}
      <Feed />

      {/* WIDGETS */}
      <Widgets />
    </div>
  );
}

export default App;
