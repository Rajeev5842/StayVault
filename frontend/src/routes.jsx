/*
  Author: Naresh Kumar  
  Email: naresh@udooh.com
  Git: https://github.com/mnaresh-u
*/

import { Navigate } from "react-router-dom";
import App from "./App";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import TandC from "./components/Terms&Conditions";
import PrivacyPolicy from "./components/Privacy&Policy";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Navigate to="/" replace />
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/terms&conditions",
    element: <TandC/>
  },
  {
    path: "/privacy&policy",
    element: <PrivacyPolicy/>
  },
  {
    path: "/contact",
    element: <Contact />
  },



];

export default routes;
