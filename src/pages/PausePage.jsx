import { Link } from 'react-router-dom';

export default function PausePage({modal, pauseOf, restartNewTable}) {

    const stylePauseMenu = { 
        visibility: modal ? 'visible': "hidden"
    }

    return (
    
        <div style={stylePauseMenu} className='menu-container menu-ingame'>
             <div className='menu-box'>
                <h1 className='text-white uppercase'>pause</h1>
                <button onClick={pauseOf} className='btn-play bg-white'>
                    <h2>continue game</h2>
                </button>
                <Link to="/play">
                <button onClick={restartNewTable} className='btn-play bg-white'>
                        <h2>restart</h2>
                    </button>
                </Link>
                <Link to="/">
                    <button onClick={restartNewTable} className='btn-play bg-red'>
                        <h2>quit game</h2>
                    </button>
                </Link>
            </div>
        </div>
    )
};