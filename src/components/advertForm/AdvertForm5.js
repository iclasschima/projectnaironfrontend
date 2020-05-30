import React,{ Component } from "react";
import AdvertNavBar from "../AdvertNavBar";
import "../../advertBody.css";
import arrowUp from "../../advertimages/Path 2arrup.svg"
import arrowDown from "../../advertimages/Path 3arrdown.svg"
import location from "../../advertimages/Path 6location.svg"
import map from "../../advertimages/Rectangle 93map.svg"
// import AdvertFooter from "../AdvertFooter"

class AdvertForm5 extends Component{

    render(){
        return(

            <div className="">
        
                    <AdvertNavBar />
                   
                    <div className="row">

                        <div className="col">

                            <div className="card advertcard">

                                <div className="card-body advertcardcontent ">
                                <div className="row-md-3 ">
                                {/* <span className="complete">3% completed</span> */}
                                <div className=" progress questionSlide " >
                                    
                                    <div className=" questionPro" role="progressbar"  aria-valuenow="3" aria-valuemin="0" aria-valuemax="100"><p>3%</p></div>
                                    </div>
                                </div>
                                <div className=" arr   "><a href="/advert3"> <img className="arrnav" src={arrowUp} alt="arrow"/></a></div>
                                <div className=" arr "><a href="/advert1"> <img className="arrnav" src={arrowDown} alt="arrow"/></a></div>


                                    
                                    <div>
                                        <p className="card-text advertbodytext">Where are your customers? </p>
                                    </div>
                                    <form>
                                    
                                    
                                        
                                    <div className="input-group mb-3 w-50">
                                    
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <img src={location} alt="location"  id="basic-addon1"/></span>
                                        </div>
                                        <input type="text" className="form-control locfield" id="exampleInputEmail1" aria-describedby="basic-addon1" placeholder="Set up specific areas" />
                                        
                                    </div>
                                    <p>Where do you want your ads to appear?</p>
                                    

                                    <div className="">
                                      <input type="text" className="fillformlong" placeholder=" Add location (city, state or country) "></input>
                                    </div>
                                    
                                        <img src={map} alt="map"/>
                                    
                                    

                                    <div className="startfloat d-flex">
                                    <p  className="btn startbtn">Next</p><p className="press">PressEnter</p>
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
                                    <a href="/" class="btn gobtn">Get to them Now</a>

                                </div>

                            </div> 

                        </div>

                    </div>

                    {/* <AdvertFooter /> */}

                
            </div>
        );
    }
}

export default AdvertForm5;