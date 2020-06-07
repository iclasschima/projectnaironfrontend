import React,{ Component} from "react";
import AdvertNavBar from "../AdvertNavBar";
import "./advertBody.css";
import AdvertFooter from "../AdvertFooter"
import cloth from "./advertimages/Vectorcloth.svg";
import single from "./advertimages/Vectorsingle.svg";
import video from "./advertimages/Vectorvideo.png";
import carosel from "./advertimages/Vectorcarosel.svg";





// import AdvertiserHook from "../Hooks/AdvertiserHook"
class AdvertForm11 extends Component{
    

    render(){
        const alldata =JSON.parse( localStorage.getItem('User'));

        console.log("AdvertBody1", this.props)
        const{
            name,
            // authors,
            // country,
            publisher,
            // mediaType,
            // numberofPages,
            onChangeData,
            onNext,
            
        }= this.props

        return(
            
            <div>
        
                    <AdvertNavBar />

                    <div className="row">

                        <div className="col">

                            <div className="card advertcard w-80">

                                <div className="card-body advertcardcontent">
                                    <div>
                                        <p className="card-text advertbodytext">Choose how you'ld like to structure your ad</p>
                                    </div>

                                    <div className=" col d-flex">
                                    
                                        <div className="picRec ">
                                            
                                            <img className="carousel"  alt="Advert images" src={carosel}></img>
                                            {/* <p>Easy,Fast and Free to set up <br/>
                                                Accept more forms of major Credit and Debit <br/>
                                                www.nairon.com
                                            </p> */}

                                        </div>
                                

                                    
                                        <div className=" picRec">
                                            {/* <p>Sell clothes Online</p> */}
                                            <img className="carousel" alt="Advert images" src={single}></img>
                                            {/* <p>Easy,Fast and Free to set up <br/>
                                                Accept more forms of major Credit and Debit <br/>
                                                www.nairon.com
                                            </p> */}

                                        </div>
                                    


                                    
                                        <div className=" picRec ">
                                            
                                            <img className="carousel" alt="Advert images" src={video}></img>
                                            {/* <p>Easy,Fast and Free to set up <br/>
                                                Accept more forms of major Credit and Debit <br/>
                                                www.nairon.com
                                            </p> */}

                                        </div>
                                    

                                 </div>
                                    

                                    <div className="d-flex">
                                    <p  className="btn startbtn" onClick={onNext}>Next</p><p className="press">PressEnter</p>
                                    </div>
                                    
                                    
                                    
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
                            <div className="card text-left  advertcard ">
                                <div className="card-body advertcardpicture infocard">
                                    <p>Sell clothes Online</p>
                                    <img alt="Advert images" src={cloth}></img>
                                    <p>Easy,Fast and Free to set up <br/>
                                        Accept more forms of major Credit and Debit <br/>
                                        www.nairon.com
                                    </p>

                                </div>
                            </div>

                        </div>

                    </div>

                    {/* <AdvertFooter /> */}

                
            </div>
        );
    }
}

export default AdvertForm11;