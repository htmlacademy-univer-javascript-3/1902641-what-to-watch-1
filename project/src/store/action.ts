import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import {Comments} from '../types/comments';
import Film from '../types/film';
import Films from '../types/films';
import Promo from '../types/promo';
import Similar from '../types/similar';

const resetMainScreen = createAction('main/resetState');
const changeGenre = createAction<{ currentGenre: string }>('main/changeGenre');
const increaseCardCount = createAction('main/increaseCardCount');
const resetCardCount = createAction('main/resetCardCount');
const resetFilmScreen = createAction('film/resetState');
const changeFilmTab = createAction<{ currentTab: string }>('film/changeFilmTab');

const loadFilms = createAction<Films>('data/loadFilms');
const loadPromo = createAction<Promo>('data/loadPromo');
const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
const setError = createAction<string | null>('app/setError');

const redirectToRoute = createAction<string>('app/redirectToRoute');
const setAvatar = createAction<string | null>('user/avatar');

const loadFilm = createAction<Film>('data/loadFilmById');
const loadComments = createAction<Comments>('data/loadCommentsById');
const loadSimilar = createAction<Similar>('data/loadSimilarById');
const setFilmFoundStatus = createAction<boolean>('film/setFilmFoundStatus');
const setFilmLoadedStatus = createAction<boolean>('film/setFilmLoadedStatus');


export {
  resetMainScreen,
  changeGenre,
  increaseCardCount,
  resetCardCount,
  resetFilmScreen,
  changeFilmTab,
  loadFilms,
  requireAuthorization,
  setDataLoadedStatus,
  setError,
  redirectToRoute,
  setAvatar,
  loadSimilar,
  loadFilm,
  loadComments,
  loadPromo,
  setFilmFoundStatus,
  setFilmLoadedStatus
};
