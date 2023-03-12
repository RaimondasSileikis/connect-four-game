import icon_check from '../assets/images/icon-check.svg';
import icon_check_hover from '../assets/images/icon-check-hover.svg';

export default function BtnCheck() {
    
    return (

        <button className='btn-check'>
            <img src={icon_check} alt="Button player vs player" />
            <img src={icon_check_hover} alt="Button player vs player" />
        </button>
    )
};