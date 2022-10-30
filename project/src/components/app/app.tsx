import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import {AppRoute} from '../../const';
import SignInPage from '../../pages/sign-in/sign-in';
import FilmCard from '../../pages/film-card/film-card';
import AddReview from '../../pages/add-review/add-review';
import MyList from '../../pages/my-list/my-list';
import PlayerPage from '../../pages/player/player-page';

type mainFilmProps = {
  title: string,
  genre: string,
  year: number
}

function App(MainScreenProps : mainFilmProps): JSX.Element {
  return (
    <BrowserRouter>

      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage mainFilmProps={MainScreenProps}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.Film}
          element={<FilmCard/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview/>}
        />
        <Route
          path={AppRoute.MyList}
          element={<MyList/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
