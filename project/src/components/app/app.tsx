import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute } from '../../const';
import SignInPage from '../../pages/sign-in/sign-in';
import AddReview from '../../pages/add-review/add-review';
import MyList from '../../pages/my-list/my-list';
import PlayerPage from '../../pages/player-page/player-page';
import WarningPage from '../../pages/warning-page/warning-page';
import PrivateRoute from '../private-route/private-route';
import FilmPage from '../../pages/film-page/film-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import { useAppSelector } from '../../hooks';
import { isCheckedAuth } from '../../utils/check-auth';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if (isCheckedAuth(authorizationStatus)) {
    return (
      <LoadingPage />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player}>
          <Route
            path={':id'}
            element={<PlayerPage />}
          />
        </Route>
        <Route path={AppRoute.Film}>
          <Route
            path={':id'}
            element={<FilmPage />}
          >
          </Route>
          <Route
            path={`:id${AppRoute.AddReview}`}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <AddReview />
              </PrivateRoute>
            }
          >
          </Route>
        </Route>
        <Route
          path={'*'}
          element={<WarningPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
