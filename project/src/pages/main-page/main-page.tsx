import { useEffect } from 'react';
import Catalog from '../../components/catalog/catalog';
import Logo from '../../components/logo/logo';
import PromoCard from '../../components/promo-card/promo-card';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authStatus, dispatch]);
  return (
    <>
      <PromoCard />
      <div className="page-content">
        <Catalog />
        <footer className="page-footer">
          <Logo lightMode/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
export default MainPage;
