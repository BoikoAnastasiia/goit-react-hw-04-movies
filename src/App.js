import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import logo from './Api_logo.svg';
import ErrorBoundary from './components/error';
import './index.css';
import Container from './components/Container';

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
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Redirect to="/" />
    </Switch>
  </ErrorBoundary>
);

export default App;
