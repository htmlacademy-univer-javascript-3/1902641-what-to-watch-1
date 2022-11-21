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
import Promo from '../../types/promo';
import Films from '../../types/fims';
import { MouseEvent } from 'react';

type AppProps = {
  // reviews: any;
  // similar: any;
  promo: Promo,
  films: Films
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage promo={props.promo} films={props.films} />}
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
            element={<FilmCard title={''} image={''} id={0} />}
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
