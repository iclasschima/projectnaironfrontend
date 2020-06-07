import React,{ Component } from "react";
import "./advertBody.css";
import arrowUp from "./advertimages/Path 2arrup.svg";
import arrowDown from "./advertimages/Path 3arrdown.svg";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class AdvertForm3 extends Component{

    render(){
        const alldata =JSON.parse( localStorage.getItem('User'));

        const{
            age1,
            age2,
            onChangeData,
            gender,
            onNext,
            onBack,
        }=this.props



        const age1dropdown={

            age1:["18","20","25"]

          }


          const age2dropdown={

            age2:["50","65","75"]

          }

        return(



            <div className=" ">

                    {/* <AdvertNavBar /> */}

                    <div className="row">

                        <div className="col">

                            <div className="card advertcard">

                                <div className="card-body advertcardcontent ">

                                    <div>
                                        <p className="card-text advertbodytext">Who do you want to view this advert? </p>
                                    </div>

                                    <div className="d-flex"   >
                                        <p className="ageRec" value="All" name="gender"
                                           onClick={onChangeData('gender')}
                                           style={gender=== undefined ?{ backgroundColor:'#B66FD3'}:{backgroundColor:'transparent'}}

                                        >
                                           All</p>
                                        <p className="ageRec"  value={gender}>Male</p>
                                        <p className="ageRec" value={gender}>Female</p>
                                    </div>

                                    <p>Age</p>
                                    <div className="ageSpace ageGroup d-flex">
                                        <FormControl className="ageHeight" variant="filled">
                                            <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                displayEmpty
                                                value={age1}
                                                name="age1"
                                                onChange={onChangeData('age1')}
                                                renderValue={(selected) => {
                                                    if (selected.length === 0) {
                                                        return <em>18</em>;
                                                    }

                                                    return  selected;
                                                }}

                                            >
                                                {age1dropdown.age1.map((option) => (
                                                    <MenuItem  key={option} value={option}>
                                                        {option}

                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                              <FormControl className="ageHeight" variant="filled">
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    displayEmpty
                                                    value={age2}
                                                    name="age2"
                                                     onChange={onChangeData('age2')}
                                                    renderValue={(selected) => {
                                                        if (selected.length === 0) {
                                                            return <em>65</em>;
                                                        }

                                                        return  selected;
                                                    }}

                                                >
                                                {age2dropdown.age2.map((option) => (
                                                        <MenuItem  key={option} value={option}>
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
                                    <p onClick={onNext} className="btn startbtn">Next</p><p className="press">PressEnter</p>
                                    </div>

                                    <div className="justify-content-end">
                                        <div className=" arr  ">
                                            <img onClick={onNext} className="arrnav" src={arrowUp} alt="arrow"/>
                                        </div>
                                        <div className=" arr  ">
                                            <img onClick={onBack} className="arrnav" src={arrowDown} alt="arrow"/>
                                        </div>
                                    </div>



                                </div>
                            </div>

                        </div>

                        {/* <div className="col-md-4">
                            <div className="card text-left w-20 advertcard ">
                                <div className="card-body advertcardcontent infocard">
                                    <p className="card-text adverinfotext"> There are 254,432
                                    possible audiences/customers in our network around you.</p>
                                    <a href="/advert2" class="btn gobtn">Get to them Now</a>

                                </div>

                            </div>

                        </div> */}

                    </div>

                    {/* <AdvertFooter /> */}


            </div>
        );
    }
}

export default AdvertForm3;