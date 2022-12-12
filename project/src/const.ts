export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum FilmPageTabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export enum Genres {
  All = 'ALL',
  Comedies = 'COMEDIES',
  Crime = 'CRIME',
  Documentary = 'DOCUMENTARY',
  Dramas = 'DRAMAS',
  Horror = 'HORROR',
  KidsFamily = 'KIDS_FAMILY',
  Romance = 'ROMANCE',
  SciFi = 'SCI_FI',
  Thrillers = 'Thrillers'
}

export const VIDEO_PREVIEW_DELAY = 1000;
