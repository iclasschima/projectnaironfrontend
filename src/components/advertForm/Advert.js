import React, { Component} from 'react';
import AdvertiserHook from '../Hooks/AdvertiserHook';
import AdvertForm1 from './AdvertForm1'
import AdvertBody2 from './AdvertForm4'

import AdvertBody1 from './AdvertForm3'
import AdvertForm2 from '../advertForm/AdvertForm2'



class Advert extends AdvertiserHook{


    render() {


        console.log(this.props)
        const getUser = JSON.parse(localStorage.getItem('User'))
        console.log("my Users", getUser)


        const {
            name,
            authors,
            country,
            publisher,
            mediaType,
            numberofPages,
            campaign,
            goal,
            age,
        } = this.state.questions;
        return (
            <div>

                { this.state.page===1? <AdvertForm1 compaign={campaign}  onChangeData={this.onChangeData} onNext={this.onNext} /> :"" }
                { this.state.page===2? <AdvertForm2 goal={goal}  onChangeData={this.onChangeData} onNext={this.onNext} /> :"" }


               { this.state.page===3? <AdvertBody1 name={name}  publisher={publisher} onChangeData={this.onChangeData}
                authors={authors} mediaType={mediaType} numberofPages={numberofPages} getUser={getUser.data} onNext={this.onNext} /> :"" }
                

                { this.state.page===4?< AdvertBody2 country={country}  onChangeData={this.onChangeData} />:""}
            </div>
        )
    }



}
export default Advert
