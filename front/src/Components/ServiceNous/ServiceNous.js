import "./ServiceNous.css";
import map from "../../Images/map.png";
import guide from "../../Images/guide.png";
import organize from "../../Images/organize.png";
import securite from "../../Images/Securite.png";
import CardService from "../CardService/CardService";
function ServiceNous() {


    return (
        <>
            <section id="serc">
                <div className="container-fluid">
                    <div className="row">
                        <CardService
                            img={map}
                            title="Moyen de transport"
                            Lmoins="Notre association fournir des multiples moyens de transport tel que les"
                            Lplus=" bus ou bien les mini bus aussi comme nous sommes une association on a le droit de profiter d'un remise pour les trains et les meteros notre objectif principal c'est de prenez soin du confort de notre visiteur."
                        ></CardService>

                        <CardService
                            img={guide}
                            title="Offre des guides"
                            Lmoins="Notre association fournir des guides réel et électronique bien selectioné"
                            Lplus=" et bien determiné quelque soit pour les guides réel qui offre des destination et des chemats attirant avec des programme bien orgainsé ou bien pour notre guide electronique qui offre des information sur le destionatin visité et la météo tous les jours."
                        ></CardService>
                        <CardService
                            img={securite}
                            title="Securité"
                            Lmoins="Notre association premier objectif c'est d'offrir tous les moyens conforts "
                            Lplus=" pour ces visiteurs sous des cinditions securisé c'est pour ca notre guides ont des attestation aps au premiers secours et équipés par des materiel de securité 'premier aids'.                        "
                        ></CardService>
                        <CardService
                            img={organize}
                            title="Programmes bien organisé"
                            Lmoins="Notre association fournir des destinatin a visité on ajoutant des photos "
                            Lplus=" et des information sur cette place d'ou ces visites sont réel et bien organisé par notre association dans les dernier années ou mois."
                        ></CardService>

                    </div>
                </div>
            </section >
        </>
    );
}


export default ServiceNous;
