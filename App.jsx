import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SIGNUPBASEBALL2 from "./components/SIGNUPBASEBALL2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|sign-up-baseball)">
          <SIGNUPBASEBALL2 {...sIGNUPBASEBALL2Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const sIGNUPBASEBALL2Data = {
    registration: "REGISTRATION",
    x2023OlympicIndoo: <React.Fragment><br />© 2023 Olympic Indoor Sports.  Powered by Eazy Eyez Entertainment.</React.Fragment>,
    screenshot20230123At8321: "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/screenshot-2023-01-23-at-8-32-1.png",
    place: "Home",
    theFacility: "The Facility",
    memberships: "Memberships",
    battingCages: "Batting Cages",
    programsEvents: "Programs & Events",
    contactUs: "Contact Us",
    ois: "OIS",
    eazy: "EAZY",
    base1: "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d797b797f87e6dea76ee19/img/base-1-1.png",
    title: "SIGN UP",
    browse: "BROWSE",
    letsCreateYourCustomPlayersCard: "Let’s create your custom Player’s Card.",
    firstUploadYourPhoto: "First, upload your photo!",
    number: "1",
    upload: "UPLOAD",
};

