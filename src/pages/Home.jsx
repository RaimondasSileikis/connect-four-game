
import logo from '../assets/images/logo.svg';

import BtnMenu from '../components/BtnMenu';
import Dashboard from '../components/Dashboard';
import BtnPlayer1 from '../components/BtnPlayer1';
import BtnPlayer2 from '../components/BtnPlayer2';
import BtnRestart from '../components/BtnRestart';
import TurnPlayer1 from '../components/TurnPlayer1';


export default function Home() {
    
    return (
        <div className='home'>
            <header className='header flex'>
                <BtnMenu/>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <BtnRestart/>
               
            </header>

            <main className='container'>
                <BtnPlayer1/>
                <Dashboard></Dashboard>
                <BtnPlayer2/>

            </main>
            
            <TurnPlayer1/>
          
        </div>
    )
};