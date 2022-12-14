import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import Films from '../types/films';

const resetMainScreen = createAction('main/resetState');
const changeGenre = createAction<{ currentGenre: string }>('main/changeGenre');
const increaseCardCount = createAction('main/increaseCardCount');
const resetCardCount = createAction('main/resetCardCount');
const resetFilmScreen = createAction('film/resetState');
const changeFilmTab = createAction<{ currentTab: string }>('film/changeFilmTab');

const loadFilms = createAction<Films>('data/loadFilms');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export {
  resetMainScreen,
  changeGenre,
  increaseCardCount,
  resetCardCount,
  resetFilmScreen,
  changeFilmTab,
  changeFilmTab,
  loadFilms,
  requireAuthorization
};
