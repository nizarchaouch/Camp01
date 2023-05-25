import "./IciNous.css";
function IciNous(props) {
    return (
        <>
            <section id="about" className="mt-3">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 ">
                            <h1>{props.title}</h1>
                            <p>
                                {props.desc}
                            </p>
                            <p>
                                {props.desc2}
                            </p>
                        </div>
                        <div className="col-md-6 text-center" >
                            <iframe width="560" height="315" src={props.frame} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default IciNous;