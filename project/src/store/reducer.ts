import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CARDS_PER_STEP, DEFAULT_GENRE, FilmPageTabs } from '../const';
import {
  changeFilmTab,
  changeGenre,
  increaseCardCount, loadFilms, requireAuthorization,
  resetCardCount,
  resetFilmScreen,
  resetMainScreen, setError, setDataLoadedStatus,
} from './action';
import { filterFilmsByGenre } from '../utils/get-film';
import Films from '../types/films';

type InitialState = {
  films: Films;
  currentGenre: string,
  filteredFilms: Films,
  cardCount: number,
  authorizationStatus: string,
  filmPageTab: string,
  error: string | null,
  isDataLoaded: boolean,
}

const initialState: InitialState = {
  films: [],

  currentGenre: DEFAULT_GENRE,
  filteredFilms: [],
  cardCount: 0,

  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  filmPageTab: FilmPageTabs.Overview as string,
  error: null
};
export const reducer = createReducer(initialState, (builder) => {
  builder

    .addCase(resetMainScreen, (state) => {
      state.currentGenre = DEFAULT_GENRE;
      state.filteredFilms = state.films;
      state.cardCount = state.films.length < CARDS_PER_STEP ? state.films.length : CARDS_PER_STEP;
    })

    .addCase(changeGenre, (state, action) => {
      const filteredFilms = filterFilmsByGenre(state.films, action.payload.currentGenre);
      state.currentGenre = action.payload.currentGenre;
      state.filteredFilms = filteredFilms;
      state.cardCount = filteredFilms.length < CARDS_PER_STEP ?
        filteredFilms.length :
        8;
    })

    .addCase(increaseCardCount, (state) => {
      state.cardCount = (state.cardCount + CARDS_PER_STEP) < state.filteredFilms.length ?
        state.cardCount + 8 :
        state.filteredFilms.length;
    })

    .addCase(resetCardCount, (state) => {
      state.cardCount = state.filteredFilms.length < CARDS_PER_STEP ?
        state.filteredFilms.length :
        8;
    })

    .addCase(resetFilmScreen, (state) => {
      state.filmPageTab = FilmPageTabs.Overview;
    })

    .addCase(changeFilmTab, (state, action) => {
      state.filmPageTab = action.payload.currentTab;
    })

    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = action.payload;
      state.cardCount = CARDS_PER_STEP;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
