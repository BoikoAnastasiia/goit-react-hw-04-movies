import logo from '../Api_logo.svg';
import Container from '../components/Container';

const HomePage = () => (
  <nav>
    <Container>
      <ul>
        <li>
          <img src={logo} alt="Partner Api logo" />
        </li>
      </ul>
    </Container>
  </nav>
);

export default HomePage;
