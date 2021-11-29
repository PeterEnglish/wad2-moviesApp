import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReview";
import ActorsPage from "./pages/actorsPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SiteHeader from "./components/siteHeader";

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader /> {/* New Header  */}
      <Switch>
        <Route exact path="/actors" component={ActorsPage} />
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MovieDetailsPage} />
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
