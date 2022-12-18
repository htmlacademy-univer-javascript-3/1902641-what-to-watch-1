import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import FAVORITE from './mocks/favorite';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorForm from './components/error-form/error-form';
import {checkAuthAction, fetchFilmsAction} from './store/api-actions';
import { setDataLoadedStatus } from './store/action';


store.dispatch(setDataLoadedStatus(true));
store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());
store.dispatch(setDataLoadedStatus(false));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorForm />
      <App favorite={FAVORITE} />
    </Provider>
  </React.StrictMode>,
);
