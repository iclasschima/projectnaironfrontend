import React,{ Component } from "react";
import "../advertBody.css"

class AdvertFooter extends Component{

    render(){
        return(
            <div className="row">

                <div className="col-md-12">
                    <div className="card advertfooter">

                        <div className="card-body advertcardcontent">
                            <p className="card-text">Change if lagos is not your location</p>

                        </div>

                    </div>

                </div>

            </div>
        );
    }

}

export default AdvertFooter;