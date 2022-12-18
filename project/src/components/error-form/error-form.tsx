import {useAppSelector} from '../../hooks';
import{getError} from '../../store/app-process/selectors';
import './error-form.css';

function ErrorForm(): JSX.Element | null {
  const error = useAppSelector(getError);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

export default ErrorForm;
