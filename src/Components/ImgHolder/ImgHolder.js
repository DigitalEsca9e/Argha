import "./ImgHolder.css";

function ImgHolder(props){
    return(
        <div className="ProjectImg">
            <img src={props.source} alt={props.alt}></img>
        </div>
    );
}
export default ImgHolder