import React from "react";
import AdvertNavBar from "../AdvertNavBar";
import "../../advertBody.css";
import AdvertFooter from "../AdvertFooter"
import AdvertiserHook from "../Hooks/AdvertiserHook";

class AdvertForm1 extends AdvertiserHook{

    

    render(){

        console.log("AdvertBody1", this.props)

        const{
            goal,
            onNext,
            onChangeData
        }= this.props;
       
        return(

            <div>
        
                    <AdvertNavBar />

                    <div className="row">

                        <div className="col">

                            <div className="card advertcard w-80">

                                <div className="card-body advertcardcontent">
                                    <div>
                                        <p className="card-text advertbodytext">What is your ads goal ?</p>
                                    </div>
                                    <form>
                                    <div className="d-flex">
                                        
                                       <p className="want d-flex">I want to</p> <input type="select" className="fillform" value={goal}
                                             placeholder="Type here" >

                                         </input>
                                    
                                    </div>



                                    <div className="d-flex">
                                    <p className="  btn startbtn" onClick={onNext}>Next</p><p className="press">PressEnter</p>
                                    <p></p>
                                    </div>
                                    </form>
                                </div>

                            </div>

                        </div>

                        <div className="col-md-4">
                            <div className="card text-left w-20 advertcard ">
                                <div className="card-body advertcardcontent infocard">
                                    <p className="card-text adverinfotext"> There are 254,432 
                                    possible audiences/customers in our network around you.</p>
                                    <a href="/" className="btn gobtn">Get to them Now</a>

                                </div>

                            </div> 

                        </div>

                    </div>

                    

                
            </div>
        );
    }
}

export default AdvertForm1;