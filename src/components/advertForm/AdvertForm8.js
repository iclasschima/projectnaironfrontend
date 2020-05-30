import React,{ Component } from "react";
import AdvertNavBar from "../AdvertNavBar";
import "../../advertBody.css";
import arrowUp from "../../advertimages/Path 2arrup.svg"
import arrowDown from "../../advertimages/Path 3arrdown.svg"

// import AdvertFooter from "../AdvertFooter"

class AdvertForm8 extends Component{

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
                                <div className=" arr  "><a href="/advert4"> <img className="arrnav" src={arrowUp} alt="arrow"/></a></div>
                                <div className=" arr   "><a href="/advert2"> <img className="arrnav" src={arrowDown} alt="arrow"/></a></div>


                                    
                                    <div>
                                        <p className="card-text advertbodytext">Select specific ISP Technologies </p>
                                    </div>
                                    <form>
                                    
                                    
                                        
                                    
                                    
                                    <div className="radioRec ">
                                        <p className="recommend">RECOMMENDED FOR YOU </p>
                                         <input type="radio" id="auto" name="action" /> 
                                         <label for="auto" className="autoText">All ISP Technologies</label>
                                       
                                    </div>
                                    
                                    <div className="radioRec manual ">
                                         <input type="radio" id="auto" name="action" /> 
                                         <label for="auto" className="autoText">Others</label>
                                       
                                    </div>
                                    
                                
                                    
                                    

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

export default AdvertForm8;