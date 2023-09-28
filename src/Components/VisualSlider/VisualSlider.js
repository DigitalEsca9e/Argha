import './VisualSlider.css';
import {ImgHolder, VidHolder} from '../index.js'

function VisualSlider(props){
    return(
        <div className='VisualContainer'>
            <ImgHolder source={props.source} alt={props.alt}/>
        </div>
    )
}

export default VisualSlider;