import Logo from '../../components/logo/logo';

function WarningPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLightMode={false} />

        <h1 className="page-title user-page__title">Error 404. Page not found.</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__submit">
            <button className="sign-in__btn">Main page</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo isLightMode />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default WarningPage;

