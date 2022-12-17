import Logo from '../../components/logo/logo';
import Reviews from '../../types/reviews';
import Similar from '../../types/similar';
import Films from '../../types/films';
import { useParams } from 'react-router-dom';
import WarningPage from '../404-page/404-page';
import FilmDescription from '../../components/description/description';
import SimilarList from '../../components/similar-list/similar-list';
import UserBlock from '../../components/user-block/user-block';

type FilmScreenProps = {
  films: Films,
  reviews: Reviews,
  similar: Similar
}

function FilmScreen(props: FilmScreenProps): JSX.Element {
  const {films, reviews, similar} = props;

  const id = Number(useParams().id);
  const film = films.find((x) => x.id === id);

  if (!film) {
    return <WarningPage/>;
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo lightMode={false}/>
            <UserBlock />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>
            <FilmDescription film={film} reviews={reviews} />
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
export default FilmScreen;
