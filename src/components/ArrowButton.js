import Up from "../images/To-Up.png";
import Bottom from "../images/To-bottom.png";

export default function ArrowButton({detail, handleClick}){
    if (!detail){
        return (
            <div style={{width: 20, height: 20, position: "absolute", right: 20, top: 20}} onClick={handleClick}>
                <img src={Bottom} style={{width: "100%"}} alt="button" />
            </div>
        );
    } else {
        return (
            <div style={{width: 20, height: 20,  position: "absolute", right: 20, top: 20}} onClick={handleClick}>
                <img src={Up} style={{width: "100%"}} alt="button" />
            </div>
        );
    }
};