import Tabs from '../tabs/tabs';
import {FilmPageTabs} from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilmPageTab, getFilm, getComments } from '../../store/film-data/selectors';
import Details from '../details/details';
import Overview from '../overview/overview';
import ReviewList from '../review-list/review-list';

function FilmDescription (): JSX.Element {
  const currentTab = useAppSelector(getFilmPageTab);
  const film = useAppSelector(getFilm);
  const comments = useAppSelector(getComments);

  if (!film) {
    return <div className="film-card__desc"></div>;
  }

  return (
    <div className="film-card__desc">
      <Tabs currentTab={currentTab} />

      {currentTab === FilmPageTabs.Overview &&
        <Overview
          rating={film.rating}
          scoresCount={film.scoresCount}
          description={film.description}
          director={film.director}
          starring={film.starring}
        />}

      {currentTab === FilmPageTabs.Details &&
        <Details
          director={film.director}
          starring={film.starring}
          runTime={film.runTime}
          genre={film.genre}
          released={film.released}
        />}

      {currentTab === FilmPageTabs.Reviews && <ReviewList reviews={comments} />}
    </div>
  );
}


export default FilmDescription;
