import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { Sentry } from 'react-activity';
import 'react-activity/dist/Sentry.css';

import { asyncGetWeather } from '../../../redux/actions/appActions';

import Header from '../../components/header';
import HourlyTemperature from '../../components/hourlyTemperature';
import WeatherIcons from '../../components/weatherIcons';
import ConnectionProblem from '../../components/connectionProblem';
import './styles.css';

export default function City() {
  const cityData = useSelector(state => state.AppReducer.cityData);
  const errorWeather = useSelector(state => state.AppReducer.errorWeather);
  const dispatch = useDispatch();
  
  const { city } = useParams();

  useEffect(() => {
    dispatch(asyncGetWeather(city));
  }, []);

  function _weatherColors(weather) {
    if(weather.main === 'Rain' || weather.main === 'Drizzle' || weather.main === 'Thunderstorm') {
      return "linear-gradient(#616978, #3B4353)"
    } else if(weather.main === 'Clear' && weather.icon === '01d') {
      return "linear-gradient(#57CBDC, #3BA1B5)"
    } else if(weather.main === 'Clear' && weather.icon === '01n') {
      return "linear-gradient(#434F69, #050C3A)"
    } else {
      return "linear-gradient(#E0E0E0, #A6A6A6)"
    }
  }

  function _textColor(weather) {
    if(weather.main === 'Rain' || weather.main === 'Drizzle' || weather.main === 'Thunderstorm' || weather.main === 'Clear') {
      return '#FFF'
    } else {
      return '#000'
    }
  }

  if(cityData.name) {
    const sunrise = new Date(cityData.sys.sunrise * 1000).toLocaleString(cityData.sys.country, {timeZone: cityData.timezone, hour: '2-digit', minute: '2-digit'});
    const sunset = new Date(cityData.sys.sunset * 1000).toLocaleString(cityData.sys.country, {timeZone: cityData.timezone, hour: '2-digit', minute: '2-digit'});

    const weather = cityData.weather[0];

    return (
      <div id="city-container" style={{backgroundImage: _weatherColors(weather), color: _textColor(weather)}}>
        <Header color={_textColor(weather)} />
        <div className="content">
          <h1>{cityData.name.toUpperCase()}</h1>
          <h2>{weather.main}</h2>
  
          <div className="temperature">
            <h3>{parseInt(cityData.main.temp)}</h3>
            <div className="temp-min-max">
              <p>°C</p>
              <div className="temp-itens-container">
                <div>
                  <BsArrowUp size={16} />
                  <p>{parseInt(cityData.main.temp_max)}°</p>
                </div>
                <div>
                  <BsArrowDown  size={16} />
                  <p>{parseInt(cityData.main.temp_min)}°</p>
                </div>
              </div>
            </div>
          </div>

          <WeatherIcons icon={weather.icon} size={150} />

          <div className="temperature-itens-container">
            {cityData.hourly.map(item => {
              const dateObject = new Date(item.dt * 1000);
              const hour = dateObject.getHours();

              if(hour === 3 || hour === 9 || hour === 15 || hour === 21) {
                return <HourlyTemperature key={hour} hour={hour} item={item} />
              }
            })}
          </div>

          <div className="temperature-itens-container info">
            <div className="itens">
              <p>wind speed</p>
              <p>{cityData.wind.speed} m/s</p>
            </div>

            <div className="separator" style={{backgroundColor: _textColor(weather)}} />

            <div className="itens">
              <p>sunrise</p>
              <p>{sunrise}</p>
            </div>

            <div className="separator" style={{backgroundColor: _textColor(weather)}} />

            <div className="itens">
              <p>sunset</p>
              <p>{sunset}</p>
            </div>

            <div className="separator" style={{backgroundColor: _textColor(weather)}} />

            <div className="itens">
              <p>humidity</p>
              <p>{cityData.main.humidity}%</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else if(errorWeather) {
    return <ConnectionProblem />
  }
  
  return (
    <div id="empty-city">
      <Sentry size={22} color='#FFF' />
    </div>
  );
}