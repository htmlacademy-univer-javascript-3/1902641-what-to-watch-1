import Details from '../../components/details/details';
import Logo from '../../components/logo/logo';
import Overview from '../../components/overview/overview';
import ReviewList from '../../components/review-list/review-list';
import Reviews from '../../types/reviews';
import SimilarList from '../../components/similar-list/similar-list';
import Similar from '../../types/similar';
import Films from '../../types/films';
import { useParams } from 'react-router-dom';
import WarningPage from '../404-page/404-page';

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
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
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
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <Overview
                rating={film.rating}
                scoresCount={film.scoresCount}
                description={film.description}
                director={film.director}
                starring={film.starring}
              />
              <Details
                director={film.director}
                starring={film.starring}
                runTime={film.runTime}
                genre={film.genre}
                released={film.released}
              />
              <ReviewList reviews={reviews}/>

            </div>
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