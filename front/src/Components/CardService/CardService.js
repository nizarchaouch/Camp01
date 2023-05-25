import { useState } from "react";
import "./CardService.css";
function CardService(props) {
    const [showText, setShowText] = useState(true);
    const handleShowText = () => {
        setShowText(!showText);
    };
    return (
        <>
            <div className="col-sm-6 col-md-6 col-lg-3 " style={{ paddingBottom: '60px' }}>
                <img src={props.img} alt="Map" />
                <p style={{ fontSize: 'x-large', fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>{props.title}</p>

                <p className="lead text-" style={{ textAlign: 'justify' }}>
                    {props.Lmoins}
                    <span id="doc1">{showText ? "..." : props.Lplus}
                    </span>{showText && <span id="more1">{props.Lplus}</span>}</p>

                <button id="btn1" onClick={handleShowText}>{showText ? 'Lire la suite' : ' Lire moins'}</button>
            </div>
        </>
    );
}

export default CardService;