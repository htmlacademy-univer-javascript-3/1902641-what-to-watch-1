import {useAppSelector} from '../../hooks';
import './error-form.css';

function ErrorForm(): JSX.Element | null {
  const {error} = useAppSelector((state) => state);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

export default ErrorForm;
