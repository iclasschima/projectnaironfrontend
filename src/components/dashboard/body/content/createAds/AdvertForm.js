import React,{ Component} from "react";
import "./advertBody.css";
// import AdvertiserHook from "../Hooks/AdvertiserHook"
class AdvertForm extends Component{
    

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
        
                    {/* <AdvertNavBar /> */}

                    <div className="row">

                        <div className="col">

                            <div className="card advertcard w-80">

                                <div className="card-body advertcardcontent">
                                    <div>
                                        <p className="card-text advertbodytext">Let's start with describing your business</p>
                                    </div>
                                    <form>
                                    
                                    <div>
                                            {/* <p className="question">{alldata[0].name}</p> */}
                                            <p className="question">Ads title</p>

                                        <input type="text" className="fillform"  value={name}></input>
                                        {/* onChange={onChangeData('name')} */}
                                        {/* <hr className="fillform"/> */}
                                    </div>

                                    <div>
                                            {/* <p className="question2">{alldata[1].publisher}</p> */}
                                            <p className="question2">Landing page (website)</p>

                                        <input type="text" className="fillform"  value={publisher}></input>
                                        {/* onChange={onChangeData('publisher')} */}
                                        {/* <hr className="fillform"/> */}
                                    </div>

                                    <div className="d-flex">
                                    <p  className="btn startbtn" onClick={onNext}>Start</p><p className="press">PressEnter</p>
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

export default AdvertForm;