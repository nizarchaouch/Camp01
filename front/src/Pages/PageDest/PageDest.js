import "./PageDest.css";
import Proposer from "../../Components/proposer/proposer";
import IciNous from "../../Components/IciNous/IcuNous";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ima1 from "../../Images/dest/korbous/52880821_2035577516540067_1699686969017819049_n.jpg";
import ima2 from "../../Images/dest/korbous/58468487_415606499254493_4529279487580246399_n.jpg";
import ima3 from "../../Images/dest/korbous/60236186_372013966765652_3892621453808026948_n.jpg";


function PageDest() {
    const params = useParams();

    const [dest, setDest] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/destination/PageDest/${params.id}`)
            .then(res => setDest(res.data))
            .catch(err => console.log(err));
    }, []);


    return (
        <>
            {/* <h2>destination page {params.id}</h2> */}
            <div className="containerr">
                <p className="title pt-4"><Proposer title="DECOUVRIR LA tunisie" /></p>
                <p className="title"><Proposer title={dest.title} subtitle={dest.subtitle} /></p>
                <p style={{ color: "white" }}><IciNous title={dest.title} desc2={dest.description} frame={dest.map} /></p>

                <section class="gal" id="gal">
                    <div class="grid">
                        <div class="gallery-item">
                            <img src={ima1} />
                        </div>
                        <div class="gallery-item">
                            <img src={ima2} />
                        </div>
                        <div class="gallery-item">
                            <img src={ima3} />
                        </div>


                    </div>

                </section>

            </div>
        </>



    );
}

export default PageDest;