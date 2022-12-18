import Catalog from '../../components/catalog/catalog';
import Logo from '../../components/logo/logo';
import PromoCard from '../../components/promo-card/promo-card';


function MainPage(): JSX.Element {
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
