import { Link } from "react-router-dom";

export default function BtnMenu({restartNewTable}) {
    
    return (
        <Link to="/">
        <div onClick={restartNewTable} className='btn-menu'>
                <h4>meniu</h4>
            </div>
        </Link>
    )
};