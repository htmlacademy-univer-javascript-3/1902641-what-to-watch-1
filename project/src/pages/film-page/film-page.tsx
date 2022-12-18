import Logo from '../../components/logo/logo';
import { useParams } from 'react-router-dom';
import WarningPage from '../404-page/404-page';
import FilmDescription from '../../components/description/description';
import SimilarList from '../../components/similar-list/similar-list';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFilmTab } from '../../store/film-data/film-data';
import { useEffect } from 'react';
import { AuthorizationStatus, favoriteClickType, FilmPageTabs } from '../../const';
import { fetchFilmByID, fetchCommentsByID, fetchSimilarByID, fetchFavoriteFilmsAction } from '../../store/api-actions';
import { getFilm, getSimilar, getIsFilmFoundStatus, getIsFilmLoadingStatus } from '../../store/film-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getFavoriteCount } from '../../store/main-data/selectors';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';

function FilmPage(): JSX.Element {
  const id = Number(useParams().id);

  const film = useAppSelector(getFilm);
  const similar = useAppSelector(getSimilar);

  const authStatus = useAppSelector(getAuthorizationStatus);

  const isFilmFoundStatus = useAppSelector(getIsFilmFoundStatus);
  const isFilmLoadingStatus = useAppSelector(getIsFilmLoadingStatus);

  const favoriteCount = useAppSelector(getFavoriteCount);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeFilmTab(FilmPageTabs.Overview));
    dispatch(fetchFilmByID(id.toString()));
    dispatch(fetchCommentsByID(id.toString()));
    dispatch(fetchSimilarByID(id.toString()));

    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }

  }, [id, authStatus, dispatch]);

  if (isFilmLoadingStatus) {
    return <WarningPage />;
  }

  if (!isFilmFoundStatus) {
    return <WarningPage />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo lightMode={false}/>

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <FilmCardButtons
                id={id}
                authStatus={authStatus}
                film={film}
                favoriteCount={favoriteCount}
                favoriteType={favoriteClickType.Film}
              />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
            </div>
            <FilmDescription />
          </div>
        </div>
      </section>

      <div className="page-content">
        <SimilarList similar={similar} />

        <footer className="page-footer">
          <Logo lightMode />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FilmPage;
