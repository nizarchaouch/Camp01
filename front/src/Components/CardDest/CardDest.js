import "./CardDest.css";
import { Link } from "react-router-dom";


function CardDest(props) {
    let imageName=props.ima;
    let image=require(`../../Images/dest/${imageName}`);
    return (
        <div class="col-sm-6 col-md-6 col-lg-3 " >
            <Link to={`PageDest/${props.id}`} className="mx-4 ">
                <div className="card"  style={{backgroundImage: `url(${image})`, height: '250px',borderRadius: "15px"}}>
                    <h5>{props.title}</h5>
                    <p style={{color:"black"}}>{props.subtitle}</p>
                </div>                
            </Link>
        </div>
    );
}

export default CardDest;