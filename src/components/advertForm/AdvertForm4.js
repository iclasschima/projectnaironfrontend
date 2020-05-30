import React,{ Component } from "react";
import AdvertNavBar from "../AdvertNavBar";
import "../../advertBody.css";
import arrowUp from "../../advertimages/Path 2arrup.svg"
import arrowDown from "../../advertimages/Path 3arrdown.svg";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import AdvertFooter from "../AdvertFooter"

class AdvertForm4 extends Component{

    render(){
        const alldata =JSON.parse( localStorage.getItem('User'));

        const{
            age,
            onChangeData
        }=this.props



        const age1dropdown={
            
            age:["18","20","25"]
    
          }

          const age2dropdown={
            
            age:["50","65","75"]
    
          }
        
        return(

            

            <div className=" ">
        
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
                                <div className=" arr   "> 
                                <a href="/advert2"><img className="arrnav" src={arrowUp} alt="arrow"/></a>
                                </div>
                                <div className=" arr  "><a href="/advert"><img className="arrnav" src={arrowDown} alt="arrow"/></a></div>


                                    
                                    <div>
                                        <p className="card-text advertbodytext">Who do you want to view this ads? </p>
                                    </div>
                                    <p>Age</p>
                                    <div className="ageSpace ageGroup d-flex">

                                            <FormControl className="ageHeight " variant="filled">
                                                <InputLabel  id="demo-simple-select-filled-label">18</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={age}
                                                    name="age"
                                                    onChange={this.onHandleChange}
                                                >
                                                {age1dropdown.age.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                    </Select>
                                             </FormControl>


                                             <FormControl className="ageHeight" variant="filled">
                                                <InputLabel  id="demo-simple-select-filled-label">50</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={age}
                                                    name="age"
                                                    onChange={this.onHandleChange}
                                                >
                                                {age2dropdown.age.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                    </Select>
                                             </FormControl>
                                  </div>
                                        {/* <p>{alldata[1].country}</p> */}
                                    {/* <div className="ageSpace"> 
                                    <div className="ageRec ageGroup  ">
                                        <input id="age" type="select"></input>
                                        <label for="age" >18</label> */}

                                      {/* <p className="dropdown-toggle ageText ">  18 </p> */}
                                      
                                    {/* </div> */}
                                    {/* <div className="ageGroup\">
                                    <hr className="ageDsh"/>
                                    </div> */}
                                    {/* <hr className="ageDash"/> */}
                                  

                                    {/* <div className="ageRec ageGroup  ">
                                      <p className="dropdown-toggle ageText">  50 </p>
                                    </div>
                                    </div>    */}

                                    <div className="startfloat d-flex">
                                    <p  className="btn startbtn">Next</p><p className="press">PressEnter</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-4">
                            <div className="card text-left w-20 advertcard ">
                                <div className="card-body advertcardcontent infocard">
                                    <p className="card-text adverinfotext"> There are 254,432 
                                    possible audiences/customers in our network around you.</p>
                                    <a href="/advert2" class="btn gobtn">Get to them Now</a>

                                </div>

                            </div> 

                        </div>

                    </div>

                    {/* <AdvertFooter /> */}

                
            </div>
        );
    }
}

export default AdvertForm4;