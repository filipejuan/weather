import { IoCloudOfflineOutline } from 'react-icons/io5';

import Header from '../header';
import './styles.css';

export default function City() {
  return (
    <div id="connection-problem-container">
      <Header color={'#FFF'}/>
      <div className="content">
        <IoCloudOfflineOutline size={130} color='#FFF' />
        <h1>Connection Problem</h1>
        <p>Check your internet connection and try again.</p>
      </div>
    </div>
  );
}