import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import BtnPlayVsPlayer from '../components/BtnPlayVsPlayer';

export default function StartPage() {

    return (
    
        <div className='menu-container'>
             <div className='menu-box'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <Link to="/play">
                    <BtnPlayVsPlayer></BtnPlayVsPlayer>
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