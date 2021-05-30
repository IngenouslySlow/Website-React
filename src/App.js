//Importing pages
import AboutUs from "./Pages/AbousUs";
import OurWork from "./Pages/OurWork";
import Contact from "./Pages/Contact";
import MovieDetails from "./Pages/MovieDetails";

//Global styles import
import GlobalStyles from "./Components/GlobalStyles";

//Importing components
import Nav from "./Components/Nav";

// Router thing
import { Switch, Route, useLocation } from "react-router-dom";
//Framer thing
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetails />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
