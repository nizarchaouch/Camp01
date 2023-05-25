import "./Guide.css";
import Proposer from "../../Components/proposer/proposer";
import j from "../../Images/jumia.webp";
import w from "../../Images/wamia.webp";
import d from "../../Images/decatlon.png";
function Guide() {
    return (
        <>
        <div className="p">
            
            <p className="title pt-4" style={{ color: "white" }}><Proposer title="VOTRE GUIDE POUR UNE MAGNIFIQUE EXPERIENCE" /></p>

            <div class="container my-5">
                <div class="row">
                    <div class="col-md-4 card shadow border-success" >
                        <h4 class=" card-header ">équipement de base pour le camping</h4>
                        <ol class="ordered-list card-body" style={{width: "300%"}}>
                            <li><span>La tente, les sardines, sans oublier le maillet</span></li>
                            <li><span>Un tapis de sol, voire un matelas gonflable</span></li>
                            <li><span>Un duvet et un oreiller</span></li>
                            <li><span>Essuie-tout et papier toilette</span></li>
                            <li><span>La trousse de toilette et une serviette éponge</span></li>
                        </ol>
                    </div>
                    <div class="col-md-4 card shadow border-success">
                        <h4 class=" card-header ">équipement de base pour le camping</h4>
                        <ol class="ordered-list card-body" style={{width: "300%"}}>
                            <li><span>La tente, les sardines, sans oublier le maillet</span></li>
                            <li><span>Un tapis de sol, voire un matelas gonflable</span></li>
                            <li><span>Un duvet et un oreiller</span></li>
                            <li><span>Essuie-tout et papier toilette</span></li>
                            <li><span>La trousse de toilette et une serviette éponge</span></li>
                        </ol>
                    </div>
                    <div class="col-md-4 card shadow border-success">
                        <h4 class=" card-header ">équipement de base pour le camping</h4>
                        <ol class="ordered-list card-body" style={{width: "300%"}}>
                            <li><span>La tente, les sardines, sans oublier le maillet</span></li>
                            <li><span>Un tapis de sol, voire un matelas gonflable</span></li>
                            <li><span>Un duvet et un oreiller</span></li>
                            <li><span>Essuie-tout et papier toilette</span></li>
                            <li><span>La trousse de toilette et une serviette éponge</span></li>
                        </ol>
                    </div>
                </div>
            </div>
            
</div>
        </>
    );
}

export default Guide;