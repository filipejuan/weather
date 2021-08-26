import WeatherIcons from '../weatherIcons';
import './styles.css';

export default function HourlyTemperature({hour, item}) {
  return (
    <div className="hourly-temperature-content">
      <p className="hour">{hour === 3 ? 'dawn' : hour === 9 ? 'morning' : hour === 15 ? 'afternoon' : 'night'}</p>
      <WeatherIcons icon={item.weather[0].icon} size={60} />
      <p className="hourly-temperature">{parseInt(item.temp)} °C</p>
    </div>
  )
}