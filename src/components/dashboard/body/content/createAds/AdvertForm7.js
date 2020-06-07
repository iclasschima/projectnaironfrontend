import React,{ Component } from "react";
import "./advertBody.css";
import arrowUp from "./advertimages/Path 2arrup.svg";
import arrowDown from "./advertimages/Path 3arrdown.svg";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";



class AdvertForm7 extends Component{

    
    
    render(){
        const{
            brand,
            onBack,
            onChangeData,
            onNext,
        }=this.props

      const devicesdropdown={
            
        devices:["Mobile Device Only","Desktop Device Only"]

      }

        return(

            <div className="">

                {/* <AdvertNavBar /> */}

                <div className="row">

                    <div className="col">

                        <div className="card advertcard">

                            <div className="card-body advertcardcontent ">

                                <div>
                                    <p className="card-text advertbodytext">What brands do you want your advert to appear?  </p>
                                </div>
                                <form>
                                    <RadioGroup value={brand} onChange={onChangeData('brand')} >
                                        <p className="recommend">RECOMMENDED FOR YOU </p>
                                        <div className="radioRec " style={brand==="All Brand"?{border:"1px solid #9160A4"}:{border:"1px solid #444444"}}>

                                            <FormControlLabel  value="All Brand" className="m-auto" control={<Radio />} label="All Brand (mobile & desktop)" labelPlacement={"end"} />

                                        </div>

                                        <div className="radioRec manual " style={brand==="Mobile Brand"?{border:"1px solid #9160A4"}:{border:"1px solid #444444"}}>

                                            <FormControlLabel   className="m-auto" value="Mobile Brand" control={<Radio />} label="Mobile Brand Only" labelPlacement={"end"}/>

                                        </div>

                                        <div className="radioRec " style={brand==="Desktop Brand"?{border:"1px solid #9160A4"}:{border:"1px solid #444444"}}>

                                            <FormControlLabel  value="Desktop Brand" className="m-auto" control={<Radio />} label="Desktop Brand Only" labelPlacement={"end"} />

                                        </div>

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

export default AdvertForm7;