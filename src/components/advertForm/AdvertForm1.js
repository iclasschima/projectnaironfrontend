import React from "react";
import AdvertNavBar from "../AdvertNavBar";
import "../../advertBody.css";
import AdvertFooter from "../AdvertFooter"
import arrowUp from "../../advertimages/Path 2arrup.svg"
import arrowDown from "../../advertimages/Path 3arrdown.svg";
import AdvertiserHook from "./AdvertiserHook";


class AdvertForm1 extends AdvertiserHook{

    

    render(){

        console.log("AdvertBody1", this.props)

        const{
            campaign,
            landingPage,
            onNext,
            onBack,
            onChangeData,

        }= this.props;
       
        return(

            <div>
        
                    {/* <AdvertNavBar /> */}


                    <div className="row">

                        <div className="col">

                            <div className="card advertcard ">

                                <div className="card-body align-items-center  justify-content-center advertcardcontent">
                                    <div>
                                        <p className="card-text advertbodytext">Let’s start with your Campaign name</p>
                                    </div>
                                    <form>
                                    <div>
                                        <div>
                                        <p className="question2">Campaign Name</p>
                                            <input type="text" className="fillform" value={campaign}
                                                onChange={onChangeData('campaign')}  >

                                            </input>
                                         </div>
                                         <div>
                                            {/* <p className="question2">{alldata[1].publisher}</p> */}
                                            <p className="question2">Landing page (website)</p>

                                            <input type="text" className="fillform"  onChange={onChangeData('landingPage')} value={landingPage}></input>
                                       
                                        </div>
                                    
                                    
                                    </div>
                                    <div className="d-flex">
                                    <p className="  btn startbtn"  onClick={onNext}>Start</p><p className="press">PressEnter</p>
                                    <p id="errText" className="text-danger text-center medium"> </p>
                                    </div>
                                     <div className="justify-content-end">
                                            <div className=" arr  ">
                                                <img onClick={onNext} className="arrnav" src={arrowUp} alt="arrow"/>
                                            </div>
                                            <div className=" arr  ">
                                                <img onClick={onBack} className="arrnav" src={arrowDown} alt="arrow"/>
                                            </div>
                                     </div>
                                    </form>
                                </div>

                            </div>

                        </div>

                        {/* <div className="col-md-4">
                            <div className="card text-left w-20 advertcard ">
                                <div className="card-body advertcardcontent infocard">
                                    <p className="card-text adverinfotext"> There are 254,432 
                                    possible audiences/customers in our network around you.</p>
                                    <a href="/" className="btn gobtn">Get to them Now</a>

                                </div>

                            </div> 

                        </div> */}

                    </div>

                    {/* <AdvertFooter /> */}

                
            </div>
        );
    }
}

export default AdvertForm1;