import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import SignInPage from '../../pages/sign-in/sign-in';
import FilmCard from '../../pages/film-card/film-card';
import AddReview from '../../pages/add-review/add-review';
import MyList from '../../pages/my-list/my-list';
import PlayerPage from '../../pages/player/player-page';
import WarningPage from '../../pages/404-page/404-page';
import PrivateRoute from '../private-route/private-route';

type mainFilmProps = {
  title: string,
  genre: string,
  year: number
}

function App(MainScreenProps: mainFilmProps): JSX.Element {
  return (
    <BrowserRouter>

      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage mainFilmProps={MainScreenProps} />}
        />
        <Route
          path={AppRoute.Login}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.Film}
        >
          <Route
            path={':id'}
            element={<FilmCard />}
          />
        </Route>
        <Route
          path={AppRoute.AddReview}
        >
          <Route
            path={':id/review'}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <AddReview />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
        >
          <Route
            path={':id'}
            element={<PlayerPage />}
          />
        </Route>
        <Route
          path={'*'}
          element={<WarningPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
