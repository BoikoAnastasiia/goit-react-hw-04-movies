import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';

function App() {
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Homepage
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Redirect to component={HomePage} />
    </Switch>
  </>;
}

export default App;
