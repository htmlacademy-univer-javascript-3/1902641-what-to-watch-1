import FilmCard from '../card/card';
import Films from '../../types/films';
import { useState } from 'react';
import GenresFilter from '../genres-filter/genres-filter';
import { useAppSelector } from '../../hooks';
import { getFilmsByGenre } from '../../utils/get-film';

type FilmCatalogProps = {
  films: Films
}

function Catalog({ films }: FilmCatalogProps): JSX.Element {
  const [pointedFilm, setPointedFilm] = useState(NaN);
  const currentGenre = useAppSelector((state) => state.currentGenre);
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresFilter />

      <div className="catalog__films-list">
        {getFilmsByGenre(films, currentGenre).map((film) => (
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
          />)
        )}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
