import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';

const api = 'bdd7600a7ae863581dc1485cc54230c3';
const apiAccess =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGQ3NjAwYTdhZTg2MzU4MWRjMTQ4NWNjNTQyMzBjMyIsInN1YiI6IjYwNzQ1MDEwNjU2ODZlMDAyOTZlNmIxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZAKARzjw5gG6Pq_bhUDFDlHW0PDgn4hdrkMiweyJwUo';

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
      <Route component={HomePage} />
    </Switch>
  </>;
}

export default App;
