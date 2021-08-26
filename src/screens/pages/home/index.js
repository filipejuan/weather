import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import worldIcon from '../../../assets/icons/world-icon.png';
import './styles.css';

export default function City() {
  const cities = useSelector(state => state.AppReducer.cities);
  const history = useHistory();

  return (
    <div id="home-container">
      <h1>WEATHER</h1>
      <h2>select a city</h2>
      <img src={worldIcon} />

      <div className="cities">
        {cities.map(city => (
          <div key={city} className="city-container">
            <button type="button" onClick={() => history.push(`/${city}`)}>{city}</button>
          </div>
        ))}
      </div>
    </div>
  )
}