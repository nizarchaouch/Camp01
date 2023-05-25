import "./proposer.css";
function Proposer(props) {
    return ( 
        <>
        <section className="mt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="display-4 ">{props.title}</p>
                            <p className="lead text-secondary">{props.subtitle}</p>
                        </div>
                    </div>
                </div>
            </section>        
        </>
     );
}

export default Proposer;