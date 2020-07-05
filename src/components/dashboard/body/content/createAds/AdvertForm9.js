import React,{ Component } from "react";
import "./advertBody.css";
import arrowUp from "./advertimages/Path 2arrup.svg"
import arrowDown from "./advertimages/Path 3arrdown.svg"
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class AdvertForm9 extends Component{

    render(){
        const{
            technologies,
            techChoice,
            onNext,
            onBack,
            onChangeData,
        }=this.props
        const techdropdown={

            techChoice:[ "Spactranet Data","MTN","Glo","Visafone","Etisalat"]

        }

        return(

            <div className="">

                    {/* <AdvertNavBar /> */}

                    <div className="row">

                        <div className="col">

                            <div className="card advertcard">

                                <div className="card-body advertcardcontent ">

                                    <div>
                                        <p className="card-text advertbodytext">Which platform do you want this ads? </p>
                                    </div>
                                    <form>
                                    <RadioGroup value={technologies} onChange={onChangeData('technologies')} >
                                        <p className="recommend">RECOMMENDED FOR YOU </p>
                                    <div className="radioRec " style={technologies==="All ISP"?{border:"1px solid #9160A4"}:{border:"1px solid #444444"}}>

                                        <FormControlLabel  value="All ISP" className="m-auto" control={<Radio />} label="All ISP Technologies" labelPlacement={"end"} />

                                    </div>

                                    <div className="radioRec manual " style={technologies==="Others"?{border:"1px solid #9160A4"}:{border:"1px solid #444444"}}>

                                        <FormControlLabel   className="m-auto" value="Others" control={<Radio />} label="Others" labelPlacement={"end"}/>

                                    </div>

                                        {technologies==="Others" ?
                                            <FormControl className="ml-5 w-75 " variant="filled">

                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={techChoice}
                                                    defaultValue="Spactranet Data"
                                                    name="tech"


                                                    onChange={onChangeData('techChoice')}
                                                >
                                                    {techdropdown.techChoice.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option }
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>:<input className="d-none"/>}

                                    </RadioGroup>



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
                                    </form>
                                </div>

                            </div>

                        </div>



                    </div>

                    {/* <AdvertFooter /> */}


            </div>
        );
    }
}

export default AdvertForm9;