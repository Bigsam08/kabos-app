import './loader.css'
import { FaHome } from 'react-icons/fa'
const HomeLoader = () => {
  return (
    <div className='loader-container'>
        <div className="animated"></div><FaHome size={32} className='load-icon'/>
        <h1> OMF<span className='text-warning'>BANK</span> </h1>
        <p> Loading... </p>
    </div>
  )
};

export default HomeLoader;
