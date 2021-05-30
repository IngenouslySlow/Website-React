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
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
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
    </div>
  );
}

export default App;
