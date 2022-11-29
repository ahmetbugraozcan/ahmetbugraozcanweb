import "./App.css";
import AboutMe from "./Views/AboutMe/View/AboutMe";
import EntryView from "./Views/EntryView/View/EntryView";
import MyServices from "./Views/MyServices/View/MyServices";
import ResumeView from "./Views/Resume/View/ResumeView";

function App() {
  return (
    <div className="App">
      <EntryView />
      <AboutMe />
      <ResumeView />
      <MyServices />
    </div>
  );
}

export default App;
