import "./Destination.css";
import CardDest from "../../Components/CardDest/CardDest";
import Proposer from "../../Components/proposer/proposer";


function Destination() {

    

    const Destination = [
        {
            id: "64681be221a9b1593bf7dea4",
            title: "Korbous",
            subtitle: "Tunisie,Nabeul",
            image:"korbous/korbous.jpg",
            description:" Aïn Draham :est une petite ville2 du Nord-Ouest de la Tunisie (gouvernorat de Jendouba) située à une vingtaine de kilomètres au sud de Tabarka. Ancien souk, camp militaire, et centre d'estivage et de services, elle se présente comme un modeste centre de développement local. Chef-lieu d'une délégation de 35 400 habitants, la ville accueille une population de 9 659 habitants en 20141.",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12783.346409751612!2d8.677203679165777!3d36.774487129259576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fb3ae643c73ce5%3A0x54c417647b890cb1!2sAin+Draham!5e0!3m2!1sfr!2stn!4v1561295169143!5m2!1sfr!2stn"
        },
        {
            id: "d2",
            title: "Oued Zitoun",
            subtitle: "Tunisie,Bizerte",
            image:"ouedzitoun/ouedzitoun.jpg",
            description:" Aïn Draham :est une petite ville2 du Nord-Ouest de la Tunisie (gouvernorat de Jendouba) située à une vingtaine de kilomètres au sud de Tabarka. Ancien souk, camp militaire, et centre d'estivage et de services, elle se présente comme un modeste centre de développement local. Chef-lieu d'une délégation de 35 400 habitants, la ville accueille une population de 9 659 habitants en 20141.",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12783.346409751612!2d8.677203679165777!3d36.774487129259576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fb3ae643c73ce5%3A0x54c417647b890cb1!2sAin+Draham!5e0!3m2!1sfr!2stn!4v1561295169143!5m2!1sfr!2stn"
        },
        {
            id: "64681ad421a9b1593bf7de9f",
            title: "Djebel Ressas",
            subtitle: "Tunisie,Ben Arous,Nabeul",
            image:"djabelrassas/djabelrassas.jpg",
            description:" Aïn Draham :est une petite ville2 du Nord-Ouest de la Tunisie (gouvernorat de Jendouba) située à une vingtaine de kilomètres au sud de Tabarka. Ancien souk, camp militaire, et centre d'estivage et de services, elle se présente comme un modeste centre de développement local. Chef-lieu d'une délégation de 35 400 habitants, la ville accueille une population de 9 659 habitants en 20141.",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12783.346409751612!2d8.677203679165777!3d36.774487129259576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fb3ae643c73ce5%3A0x54c417647b890cb1!2sAin+Draham!5e0!3m2!1sfr!2stn!4v1561295169143!5m2!1sfr!2stn"
        }, {
            id: "d4",
            title: "Oued Zen",
            subtitle: "Tunisie,Jendouba",
            image:"ouedzen/ouedzen.jpg",
            description:" Aïn Draham :est une petite ville2 du Nord-Ouest de la Tunisie (gouvernorat de Jendouba) située à une vingtaine de kilomètres au sud de Tabarka. Ancien souk, camp militaire, et centre d'estivage et de services, elle se présente comme un modeste centre de développement local. Chef-lieu d'une délégation de 35 400 habitants, la ville accueille une population de 9 659 habitants en 20141.",
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12783.346409751612!2d8.677203679165777!3d36.774487129259576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fb3ae643c73ce5%3A0x54c417647b890cb1!2sAin+Draham!5e0!3m2!1sfr!2stn!4v1561295169143!5m2!1sfr!2stn"
        }, {
            id: "d5",
            title: "Cap Negro",
            subtitle: "Tunisie,Béja",
            image:"capnegro/capnegro.jpg",
            description:"",
            map:""
        }
        , {
            id: "d6",
            title: "Cap Serrat",
            subtitle: "Tunisie,Bizerte",
            image:"capserrat/capserrat.jpg",
            description:"",
            map:""
        }, {
            id: "d7",
            title: "Jebel Serj",
            subtitle: "Tunisie,Siliana",
            image:"jebelserj/jebelserj.jpg",
            description:"",
            map:""
        }, {
            id: "d8",
            title: "Beni M'Tir",
            subtitle: "Tunisie,Jendouba",
            image:"bnimtir/bnimtir.jpg",
            description:"",
            map:""
        }, {
            id: "d9",
            title: "Nefta",
            subtitle: "Tunisie,Touzeur",
            image:"nefta/nefta.jpg",
            description:"",
            map:""
        }, {
            id: "d10",
            title: "Zriba Oulia",
            subtitle: "Tunisie,Zaghouan",
            image:"zribaoulia/zribaoulia.jpg",
            description:"",
            map:""
        }, {
            id: "d11",
            title: "La Galite",
            subtitle: "Tunisie,Bizerte",
            image:"lagalite/lagalite.jpg",
            description:"",
            map:""
        }, {
            id: "d12",
            title: "Kuriat",
            subtitle: "Tunisie,Monastir",
            image:"kuriat/kuriat.jpg",
            description:"",
            map:""
        }, {
            id: "d13",
            title: "Ain Draham",
            subtitle: "Tunisie,Jendouba",
            image:"aindraham/aindraham.jpg",
            description:"",
            map:""
        }, {
            id: "d14",
            title: "Chott el-Jérid",
            subtitle: "Tunisie,Tozeur",
            image:"chottjerid/chottjerid.jpg",
            description:"",
            map:""
        }, {
            id: "d15",
            title: "Douiret",
            subtitle: "Tunisie,Tataouine",
            image:"douiret/douiret.jpg",
            description:"",
            map:""
        }, {
            id: "d16",
            title: "Djebel Bargou",
            subtitle: "Tunisie,Siliana",
            image:"djebelbargou/djebelbargou.jpg",
            description:"",
            map:""
        }
    ]

    const listDest= Destination.map((item)=><CardDest ima={item.image} id={item.id} title={item.title} subtitle={item.subtitle} />);

    return (
        
        <div className="containerr">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p id="tn"><Proposer title="La Tunisie" ></Proposer></p>
                        <p ><Proposer subtitle="Destinatin De Camping" ></Proposer></p>
                    </div>
                </div>
            </div>
            <div className="row">

                {listDest}
            </div>
            
        </div>
    );
}

export default Destination;