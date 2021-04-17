import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import logo from './Api_logo.svg';
import ErrorBoundary from './components/error';
import './index.css';
import Container from './components/Container';

const HomePage = lazy(() =>
  import('./views/HomePage.jsx' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage.jsx' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.jsx' /* webpackChunkName: "movie-detailsPage" */
  ),
);

const App = () => (
  <ErrorBoundary>
    <nav>
      <Container>
        <ul className="routerContainer">
          <li className="routerList">
            <NavLink
              exact
              to="/"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              <img src={logo} alt="The Movie Database  Logo" width="50px" />
            </NavLink>
          </li>

          <li className="routerList">
            <NavLink
              to="/movies"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
    <Suspense fallback={<h1 className="fallback">Loading...</h1>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default App;
