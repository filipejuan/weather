import {
  WiDaySunny,
  WiDayCloudy,
  WiNightClear,
  WiNightAltCloudy,
  WiCloudy,
  WiRain,
  WiDayRainMix,
  WiNightAltRainMix,
  WiThunderstorm,
  WiDaySnow,
  WiNightAltSnow,
  WiDayFog,
  WiNightFog
} from "react-icons/wi";


export default function WeatherIcons({icon, size}) {
  if(icon === '01d') {
    return <WiDaySunny size={size} />
  } else if(icon === '02d') {
    return <WiDayCloudy size={size} />
  } else if(icon === '01n') {
    return <WiNightClear size={size} />
  } else if(icon === '02n') {
    return <WiNightAltCloudy size={size} />
  } else if(icon === '03d' || icon === '03n' || icon === '04d' || icon === '04n') {
    return <WiCloudy size={size} />
  } else if(icon === '09d' || icon === '09n') {
    return <WiRain size={size} />
  } else if(icon === '10d') {
    return <WiDayRainMix size={size} />
  } else if(icon === '10n') {
    return <WiNightAltRainMix size={size} />
  } else if(icon === '11d' || icon === '11n') {
    return <WiThunderstorm size={size} />
  } else if(icon === '13d') {
    return <WiDaySnow size={size} />
  } else if(icon === '13n') {
    return <WiNightAltSnow size={size} />
  } else if(icon === '50d') {
    return <WiDayFog size={size} />
  } else {
    return <WiNightFog size={size} />
  }
}