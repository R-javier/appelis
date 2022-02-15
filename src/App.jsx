import React from "react";
import MoviesGrid from "./components/MoviesGrid";
import styles from "./components/App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Appelis</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/">404</Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
