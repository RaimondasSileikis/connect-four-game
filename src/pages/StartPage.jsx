import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import BtnPlayVsPlayer from '../components/BtnPlayVsPlayer';
import BtnPlayVsCpu from '../components/BtnPlayVsCpu';

export default function StartPage({playVsCpu, playVsPlayer}) {

    return (
    
        <div className='menu-container menu-start'>
             <div className='menu-box'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <Link to="/play">
                    <BtnPlayVsCpu playVsCpu={playVsCpu}></BtnPlayVsCpu>
                </Link>
                <Link to="/play">
                    <BtnPlayVsPlayer playVsPlayer={playVsPlayer}></BtnPlayVsPlayer>
                </Link>
                <Link to="/rules">
                    <button className='btn-play bg-white'>
                        <h2>games rules</h2>
                    </button>
                </Link>
            </div>
        </div>
    )
};