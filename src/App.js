import "./App.css";
import AboutMe from "./Views/AboutMe/View/AboutMe";
import ContactView from "./Views/Contact/View/ContactView";
import EntryView from "./Views/EntryView/View/EntryView";
import FooterView from "./Views/Footer/View/FooterView";
import MediumPostsView from "./Views/MediumPosts/View/MediumPostsView";
import MyServices from "./Views/MyServices/View/MyServices";
import ResumeView from "./Views/Resume/View/ResumeView";
import SkillsView from "./Views/Skills/View/SkillsView";
import WorksView from "./Views/Works/View/WorksView";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <EntryView />
      <AboutMe />
      <ResumeView />
      <MyServices />
      <SkillsView />
      <WorksView />
      <ContactView />
      <FooterView />

      {/* <MediumPostsView /> */}
    </div>
  );
}

export default App;
