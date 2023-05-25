import "./Acceuil.css"
import Proposer from "../../Components/proposer/proposer";
import IciNous from "../../Components/IciNous/IcuNous";
import ServiceNous from "../../Components/ServiceNous/ServiceNous";
import Map from "../../Components/Map/Map";

function Acceuil() {
    return (
        <>
            <div className="p">
                <div className="header "></div>
                {/******************* * / A PROPOS NOTER SITE ***********************/}
                <p style={{ color: "white" }}><Proposer title="A propos de notre site" subtitle="Les campeurs du monde entier sont les bienvenus" /></p>
                {/******************* * /ICI NOUS CAMPINER ***********************/}
                <p style={{ color: "white" }}><IciNous title="ici NOUS CAMPINER"
                    desc="Le camping ou campisme est une activité touristique qui consiste à séjourner au même endroit sous une tente, une caravane ou encore dans un camping-car. Elle utilise notamment une caravane, un clip car ou un camping-car. Hébergement touristique pendant les vacances ou de loisirs, il devient depuis quelques années un recours à des familles dans des conditions de vie précaires." 
                    desc2="D'où ce site est créé principalement pour servir cette activité et fournir toutes les services au visiteur que ce soit des informations ou des expériences réelles. Pour résumer, ce site a pour objectif de satisfaire ses visiteurs et de leur donner de nouvelles idées sur ce domaine."
                    frame="https://www.youtube-nocookie.com/embed/3hu3OBmC3PI?controls=0&amp;start=35"
                    /></p>

                <p style={{ color: "white" }}><Proposer title="Nos Services" subtitle="campiner offer" /></p>
                <p style={{ color: "white" }}><ServiceNous /></p>

                <p style={{ color: "white" }}><Proposer title="Map De Centre De Camping" /> </p>
                <Map />
            </div>
            {/* <Footer></Footer> */}
        </>
    );
}

export default Acceuil;