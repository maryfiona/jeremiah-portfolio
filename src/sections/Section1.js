import React from "react";
import './Section1.css';
import Arrow from '../Assets/Arrow.png'


const Section1 = () => {
    return(
        <React.Fragment>
            <div className="container pa">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box">
                            <h2 className="text-light">Capiton lion</h2>
                            <p className="pp">Web3.0 Defi specialized on music NFT Platform  </p>
                            <p className="text-success">Visit Website <img src={Arrow} alt="Arw" /> </p>
                             <button className="butt">Read case</button>

                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <p>fona</p>

                        </div>

                    </div>
                    

                </div>

            </div>
            <div className="container pa">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box">
                            <p>fii</p>

                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <p>fona</p>

                        </div>

                    </div>
                    

                </div>

            </div>
            <div className="container pa">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box">
                            <p>fii</p>

                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <p>fona</p>

                        </div>

                    </div>
                    

                </div>

            </div>
        </React.Fragment>
    )

};
export default Section1;
