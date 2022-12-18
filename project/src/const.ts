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

export const DEFAULT_GENRE = 'All genres';
export const VIDEO_PREVIEW_DELAY = 1000;
export const TIMEOUT_SHOW_ERROR = 5000;

export enum APIRoute {
  Promo = '/promo',
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Similar = '/similar',
  Comments = '/comments'
}

export const CARDS_PER_STEP = 8;
