import React,{ Component } from "react";
import AdvertNavBar from "./AdvertNavBar";
import "../advertBody.css";
import AdvertFooter from "./AdvertFooter"

class AdvertBody extends Component{

    render(){
        return(

            <div className="w-100 container-fluid">
        
                    <AdvertNavBar />

                    <div className="row">

                        <div className="col-md-9">

                            <div className="card advertcard w-80">

                                <div className="card-body advertcardcontent">
                                    <div>
                                        <p className="card-text advertbodytext">Let's start with describing your business</p>
                                    </div>
                                    <div>
                                        <p className="question">Business name</p>
                                        <hr className="fillform"/>
                                    </div>

                                    <div>
                                        <p className="question">Business website</p>
                                        <hr className="fillform"/>
                                    </div>

                                    <div>
                                    <a href="/" class="btn startbtn">Start</a>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-3">
                            <div className="card text-left w-20 advertcard ">
                                <div className="card-body advertcardcontent infocard">
                                    <p className="card-text adverinfotext"> There are 254,432 
                                    possible audiences/customers in our network around you.</p>
                                    <a href="/" class="btn gobtn">Get to them Now</a>

                                </div>

                            </div> 

                        </div>

                    </div>

                    <AdvertFooter />

                
            </div>
        );
    }
}

export default AdvertBody;