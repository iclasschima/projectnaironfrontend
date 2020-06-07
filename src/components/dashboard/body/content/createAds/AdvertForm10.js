import React,{ Component} from "react";
import "./advertBody.css";
// import cloth from "../../advertimages/Vectorcloth.svg";
import arrowUp from "./advertimages/Path 2arrup.svg";
import arrowDown from "./advertimages/Path 3arrdown.svg";
// import Vectorcloth from "../../../../../advertimages"


// import AdvertiserHook from "../Hooks/AdvertiserHook"
class AdvertForm10 extends Component{
    

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
            onBack,
            onNext,
            
        }= this.props

        return(
            
            <div>


                    <div className="row">

                        <div className="col">

                            <div className="card advertcard w-80">

                                <div className="card-body advertcardcontent">
                                    <div>
                                        <p className="card-text advertbodytext">Headline and Description</p>
                                    </div>
                                    <form>
                                    
                                    <div>
                                            {/* <p className="question">{alldata[0].name}</p> */}
                                            <p className="question">Headline 1</p>

                                        <input type="text" className="fillform" placeholder="sell clothes Online" value={name}></input>
                                        {/* onChange={onChangeData('name')} */}
                                        {/* <hr className="fillform"/> */}
                                    </div>


                                    <div>
                                            {/* <p className="question2">{alldata[1].publisher}</p> */}
                                            <p className="question2">Description 1</p>

                                        <input type="text" className="fillform" placeholder="Easy,Fast and Free to set up" value={publisher}></input>
                                        {/* onChange={onChangeData('publisher')} */}
                                        {/* <hr className="fillform"/> */}
                                    </div>

                                    <div>
                                            {/* <p className="question2">{alldata[1].publisher}</p> */}
                                            <p className="question2">Description 2</p>

                                        <input type="text" className="fillform" placeholder="Accept more forms of major Credit and Debit" value={publisher}></input>
                                        {/* onChange={onChangeData('publisher')} */}
                                        {/* <hr className="fillform"/> */}
                                    </div>

                                    <div>
                                            {/* <p className="question2">{alldata[1].publisher}</p> */}
                                            <p className="question2">Display Url</p>

                                        <input type="text" className="fillform" placeholder="www.nairon.com" value={publisher}></input>
                                        {/* onChange={onChangeData('publisher')} */}
                                        {/* <hr className="fillform"/> */}
                                    </div>

                                    <div className="d-flex">
                                    <p  className="btn startbtn" onClick={onNext}>Next</p><p className="press">PressEnter</p>
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

                        {/*<div className="col-md-4">*/}
                        {/*    <div className="card text-left w-20 advertcard ">*/}
                        {/*        <div className="card-body advertcardcontent infocard">*/}
                        {/*            <p className="card-text adverinfotext"> There are 254,432 */}
                        {/*            possible audiences/customers in our network around you.</p>*/}
                        {/*            <a href="/" className="btn gobtn">Get to them Now</a>*/}

                        {/*        </div>*/}

                        {/*    </div> */}
                        {/*    <div className="card text-left  advertcard ">*/}
                        {/*        <div className="card-body advertcardpicture infocard">*/}
                        {/*            <p>Sell clothes Online</p>*/}
                        {/*            <img alt="Advert images" src={cloth}></img>*/}
                        {/*            <p>Easy,Fast and Free to set up <br/>*/}
                        {/*                Accept more forms of major Credit and Debit <br/>*/}
                        {/*                www.nairon.com*/}
                        {/*            </p>*/}

                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*</div>*/}

                    </div>



                
            </div>
        );
    }
}

export default AdvertForm10;