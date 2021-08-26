import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';

import { clearCityData } from '../../../redux/actions/appActions';

import './styles.css';

export default function Header({color}) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    return () => dispatch(clearCityData());
  }, []);

  return (
    <div id="header-container">
      <button type="button" onClick={() => history.push('/')}>
        <ImArrowLeft2 size={25} color={color} />
      </button>
    </div>
  )
}