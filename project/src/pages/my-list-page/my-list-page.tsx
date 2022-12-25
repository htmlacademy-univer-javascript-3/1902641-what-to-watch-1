import Logo from '../../components/logo/logo';
import EasyFilmCard from '../../components/easy-film-card/easy-film-card';
import UserBlock from '../../components/user-block/user-block';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteFilms, getLoadedDataStatus} from '../../store/main-data/selectors';
import {useEffect} from 'react';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AuthorizationStatus} from '../../const';
import LoadingPage from '../loading-page/loading-page';

function MyListPage(): JSX.Element {
  const favorite = useAppSelector(getFavoriteFilms);
  const authStatus = useAppSelector(getAuthorizationStatus);

  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authStatus, dispatch]);

  if (isDataLoaded) {
    return <LoadingPage />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLightMode={false} />

        <h1 className="page-title user-page__title">
          My list<span className="user-page__film-count">{favorite.length}</span>
        </h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {favorite.map((film) => <EasyFilmCard key={film.id} id={film.id} title={film.name} image={film.previewImage}/>)}
        </div>
      </section>

      <footer className="page-footer">
        <Logo isLightMode />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListPage;
