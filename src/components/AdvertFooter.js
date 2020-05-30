import React,{ Component } from "react";
import "../advertBody.css"

class AdvertFooter extends Component{

    render(){
        return(
            <div className="row">

                <div className="col">
                    <div className="card advertfooter">

                        <div className="card-body advertcardcontent">
                            <p className="card-text">Change if <a href="/" className="lagRec dropdown-toggle loc">lagos</a> is not your location</p>

                        </div>

                    </div>

                </div>

            </div>
        );
    }

}

export default AdvertFooter;