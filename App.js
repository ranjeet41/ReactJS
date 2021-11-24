import { Route, Switch, useLocation } from "react-router";
import Header from "./Components/Header";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Calender from "./Pages/Calender";
import Documents from "./Pages/Documents";
import Projects from "./Pages/Projects";
import VideoGalry from './Pages/VideoGalry';
import Announcement from './Pages/Announcement';
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
 
  height:auto;
  justify-content: center;
  overflow-y:scrool;
  overflow-x:hidden;
  margin-top:60px;
  h1 {
    font-size: calc(1.3vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
function App() {
    const location = useLocation();
    return (
      <>
      <Header/>
        <Sidebar/>
        <Pages>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route path="/team" component={Team} />
              <Route path="/calender" component={Calender} />
              <Route path="/documents" component={Documents} />
              <Route path="/projects" component={Projects} />
              <Route path="/VideoGalry" component={VideoGalry} />
              <Route path="/Announcement" component={Announcement} />

            </Switch>
          </AnimatePresence>
        </Pages>
      </>
    );
  }
  export default App;