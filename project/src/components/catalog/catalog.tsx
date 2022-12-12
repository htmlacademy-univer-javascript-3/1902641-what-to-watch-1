import FilmCard from '../card/card';
import { useState } from 'react';
import GenresFilter from '../genres-filter/genres-filter';
import { useAppSelector } from '../../hooks';
import ShowMoreButton from '../show-more-button/show-more-button';

function Catalog(): JSX.Element {
  const [pointedFilm, setPointedFilm] = useState(NaN);
  const films = useAppSelector((state) => state.filteredFilms);
  const cardCount = useAppSelector((state) => state.cardCount);
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresFilter />

      <div className="catalog__films-list">
        {films.slice(0, cardCount).map((film) => (
          <FilmCard
            key={film.id}
            id={film.id}

            title={film.name}
            image={film.previewImage}
            previewVideo={film.previewVideoLink}

            isPointed={pointedFilm === film.id}
            onChangePointedFilm={(pointedId: number) => {
              setPointedFilm(pointedId);
            }}
          />))}
      </div>

      <ShowMoreButton isAllCardsLoaded={cardCount !== films.length}/>
    </section>
  );
}

export default Catalog;
