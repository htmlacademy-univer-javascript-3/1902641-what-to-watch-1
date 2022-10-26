import { Route, Routes, BrowserRouter } from 'react-router-dom';
import WelcomeFilm from '../../pages/welcome-movie-page/welcome-movie-page';


type AppScreenProps = {
  errorsCount: number;
}

function App({errorsCount}:AppScreenProps): JSX.Element {
  return (
    <WelcomeFilm errorsCount={errorsCount}/>
  );
}

export default App;
