/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../advertNavBar.css";
import smile from "../advertimages/Path 8simile.svg";
import notification from "../advertimages/Group 5notification.svg";
import setting from "../advertimages/Group 7setting.svg";
import question from "../advertimages/Group 3question.svg";
class AdvertNavBar extends Component{

    render(){
      return(
    
        
            <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light ">
                        <div className="col">
                            <h4 className=" navbar-brand nairontext">nairon</h4>
                            <button className=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                       </div>    
                            <div className="  collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav ">
                                    <div className="vl"></div>
                                    <li className="nav-item">
                                        
                                        <a className=" nav-link" href="/"><h4 className="advertnavtext">New Advert</h4></a>
                                    </li>

                                    {/* <div className=" d-flex icongroup"> */}
                                   <li className="nav-item"> 
                                        <a className=" nav-link" href="/"><img className="questionicon" alt="question" src={question}/></a>
                                    </li>
                                    <li className="nav-item">         
                                        <a className=" nav-link" href="/"> <img className="settingicon" alt="setting" src={setting}/></a>     
                                    </li>
                                    <li className="nav-item">      
                                        <a className=" nav-link" href="/"><img className="settingicon" alt="notification" src={notification}/></a>
                                    </li> 
                                    <li className="nav-item">
                                        <a className=" nav-link" href="/"><img  className="smileicon" alt="smile" src={smile}/></a>
                                     </li>      
                                    {/* </div> */}
                                    <li className="nav-item">
                                    
                                        <h5 className="dropdown-toggle  advertname" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Micheal Joshua</h5>
                                        <div className="  dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="/">Action</a>
                                            <a className="dropdown-item" href="/">Another action</a>
                                            <a className="dropdown-item" href="/">Something else here</a>
                                         </div>
                                    </li>
                </ul>
            </div>
            

            </nav>
            {/* <hr className="navUnderline"></hr> */}
            </div>
        
    
        );

    }



   

}
export default AdvertNavBar;