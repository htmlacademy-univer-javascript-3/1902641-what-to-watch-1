import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import SignInPage from '../../pages/sign-in/sign-in';
import AddReview from '../../pages/add-review/add-review';
import MyList from '../../pages/my-list/my-list';
import PlayerPage from '../../pages/player/player-page';
import WarningPage from '../../pages/404-page/404-page';
import PrivateRoute from '../private-route/private-route';
import Promo from '../../types/promo';
import Films from '../../types/films';
import Reviews from '../../types/reviews';
import Similar from '../../types/similar';
import Favorite from '../../types/favorite';
import FilmPage from '../../pages/film-page/film-page';

type AppProps = {
  reviews: Reviews;
  similar: Similar;
  promo: Promo,
  films: Films,
  favorite: Favorite
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage promo={props.promo} />}
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
            element={<FilmPage films={props.films} reviews={props.reviews} similar={props.similar} />}
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
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList myList={props.favorite} />
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
          path={`:id${AppRoute.AddReview}`}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <AddReview />
            </PrivateRoute>
          }
        >
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
