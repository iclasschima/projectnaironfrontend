import React, { Component} from 'react';
import AdvertiserHook from './AdvertiserHook';
import AdvertForm1 from './AdvertForm1'
import AdvertBody2 from './AdvertForm3'
import arrowUp from "./advertimages/Path 2arrup.svg"
import arrowDown from "./advertimages/Path 3arrdown.svg";
import "./advertBody.css";
import AdvertBody1 from './AdvertForm'
import AdvertForm2 from './/AdvertForm2'
import AdvertForm3 from './/AdvertForm3'
import AdvertForm5 from "./AdvertForm5";
import {Line} from "rc-progress";
import AdvertForm4 from "./AdvertForm4";
import AdvertForm6 from "./AdvertForm6";
import AdvertForm7 from "./AdvertForm7";
import AdvertForm8 from "./AdvertForm8";
import AdvertForm9 from "./AdvertForm9";
import AdvertForm10 from "./AdvertForm10";




class Advert extends AdvertiserHook{


    render() {
        const {percent, color} = this.state;


        const containerStyle = {
            width: '250px',
        };

        console.log(this.props)
        const getUser = JSON.parse(localStorage.getItem('User'))
        console.log("my Users", getUser)


        const {
            name,
            authors,
            country,
            publisher,
            platform,
            manualPlatform,
            mediaType,
            devices,
            brand,
            technologies,
            techChoice,
            numberofPages,
            campaign,
            landingPage,
            goal,
            age1,
            age2,
            gender,
            versions,
            place_formatted,
        } = this.state.questions;
        return (

            <div>

                <div className="pt-5">
                    <h3 className="font-small font-weight-bold "> {percent}% completed </h3>
                    <div style={containerStyle}>
                        <Line percent={percent} strokeWidth="2" strokeColor={color} />
                        {/*<Line*/}
                        {/*    percent={[(percent / 7) *100, (percent / 7)*100]}*/}
                        {/*    strokeWidth="4"*/}
                        {/*    strokeColor={[color, '#CCC']}*/}
                        {/*/>*/}
                    </div>
                    {/*<p>*/}
                    {/*    <button type="button" onClick={this.changeState}>*/}
                    {/*        Change State*/}
                    {/*    </button>*/}
                    {/*</p>*/}

                    <hr/>
                </div>

                    <div className=" container">
                        { this.state.page===1? <AdvertForm1 compaign={campaign} landingPage={landingPage}
                                                            changeState={this.changeState} onChangeData={this.onChangeData}
                                                            onNext={this.onNext}
                                                            onBack={this.onBack}
                        /> :"" }
                        { this.state.page===2? <AdvertForm2   goal={goal} handleChangeMultiple={this.handleChangeMultiple}
                                                            onChangeData={this.onChangeData} onNext={this.onNext}
                                                            onBack={this.onBack}

                        /> :"" }


                        { this.state.page===3? <AdvertForm3 age1={age1}
                                                            age2={age2} gender={gender}
                                                            onChangeData={this.onChangeData}
                                                             onNext={this.onNext}
                                                            onBack={this.onBack}

                        /> :"" }
                        

                        { this.state.page===4?< AdvertForm4 place_formatted={this.place_formatted}
                                                            onChangeData={this.onChangeData}
                                                            onNext={this.onNext}
                                                            onBack={this.onBack}


                        />:""}


                        { this.state.page===5?< AdvertForm5 platform={platform} manualPlatform={manualPlatform}
                                                            onChangeData={this.onChangeData}
                                                            onNext={this.onNext}
                                                            onBack={this.onBack}

                        />:""}

                        { this.state.page===6?< AdvertForm6 devices={devices}
                                                            onChangeData={this.onChangeData}
                                                            onNext={this.onNext}
                                                            onBack={this.onBack}

                        />:""}

                        { this.state.page===7?< AdvertForm7 brand={brand}
                                                            onChangeData={this.onChangeData}
                                                            onNext={this.onNext}
                                                            onBack={this.onBack}

                        />:""}


                        { this.state.page===8?< AdvertForm8 versions={versions}
                                                            onChangeData={this.onChangeData}
                                                            onNext={this.onNext}
                                                            onBack={this.onBack}

                        />:""}

                        { this.state.page===9?< AdvertForm9 technologies={technologies}
                                                            techChoice={techChoice}
                                                            onChangeData={this.onChangeData}
                                                            onNext={this.onNext}
                                                            onBack={this.onBack}

                        />:""}


                        { this.state.page===10?< AdvertForm10 name={name}
                                                            // techChoice={techChoice}
                                                            onChangeData={this.onChangeData}
                                                            onNext={this.onNext}
                                                            onBack={this.onBack}

                        />:""}


                    </div>


            </div>
        )
    }



}
export default Advert
