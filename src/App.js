import "./App.css";
import AboutMe from "./Views/AboutMe/View/AboutMe";
import EntryView from "./Views/EntryView/View/EntryView";
import MediumPostsView from "./Views/MediumPosts/View/MediumPostsView";
import MyServices from "./Views/MyServices/View/MyServices";
import ResumeView from "./Views/Resume/View/ResumeView";
import SkillsView from "./Views/Skills/View/SkillsView";
import WorksView from "./Views/Works/View/WorksView";

function App() {
  return (
    <div className="App">
      <EntryView />
      <AboutMe />
      <ResumeView />
      <MyServices />
      <SkillsView />
      <WorksView />
      <MediumPostsView />
    </div>
  );
}

export default App;
