import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { resetMainScreen } from '../../store/action';

type FilmCardProps = {
  title: string,
  image: string,
  id: number
}

function DevFilmCard({ id, title, image }: FilmCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`${AppRoute.Film}/${id}`}
          onClick={() => {
            dispatch(resetMainScreen());
          }}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
}

export default DevFilmCard;
