import React,{ Component } from "react";
import "./advertBody.css";
import arrowUp from "./advertimages/Path 2arrup.svg";
import arrowDown from "./advertimages/Path 3arrdown.svg";
import location from "./advertimages/Path 6location.svg"


class AdvertForm4 extends Component{

    componentDidMount = () => {


        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 6.5244, lng: 3.3792},
            zoom: 13,
            // mapTypeId: 'roadmap',
            mapTypeControl: false,
        });

        map.addListener('zoom_changed', () => {
            this.setState({
                zoom: map.getZoom(),
            });
        });

        // map.addListener('maptypeid_changed', () => {
        //     this.setState({
        //         maptype: map.getMapTypeId(),
        //     });
        // });

        let marker = new window.google.maps.Marker({
            map: map,
            position: {lat: 6.5244, lng: 3.3792},
        });

// initialize the autocomplete functionality using the #pac-input input box
        let inputNode = document.getElementById('pac-input');
        map.controls[window.google.maps.ControlPosition.TOP].push(inputNode);
        let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

        autoComplete.addListener('place_changed', () => {
            let place = autoComplete.getPlace();
            let location = place.geometry.location;

            this.setState({
                place_formatted: place.formatted_address,
                place_id: place.place_id,
                place_location: location.toString(),
            });

            // bring the selected place in view on the map
            map.fitBounds(place.geometry.viewport);
            map.setCenter(location);

            marker.setPlace({
                placeId: place.place_id,
                location: location,
            });
        });




        console.log("AdvertiserHooks", this.props)
    };



    render(){


        const{
            country,
            place_formatted,
            onBack,
            onNext,
            onChangeData,
        }=this.props

        return(


            <div className="">
        
                    {/* <AdvertNavBar /> */}
                   
                    <div className="row">

                        <div className="col">

                            <div className="card advertcard">

                                <div className="card-body advertcardcontent ">
                                    
                                    <div>
                                        <p className="card-text advertbodytext">Where are your customers? </p>
                                    </div>
                                    <form>
                                        
                                    <div className="input-group mb-3 " id="input-group">
                                    
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <img src={location} alt="location"  id="basic-addon1"/></span>
                                        </div>
                                        <input type="text" className="form-control locfield" id="exampleInputEmail1" aria-describedby="basic-addon1" placeholder="Set up specific areas" />
                                        
                                    </div>
                                    <p>Where do you want your ads to appear?</p>
                                    

                                    {/*<div className="">*/}
                                    {/*  <input type="text" className="fillformlong"*/}
                                    {/*         placeholder=" Add location (city, state or country) " onChange={onChangeData('country')} value={country}>*/}

                                    {/*  </input>*/}
                                    {/*</div>*/}
                                    
                                    {/*    <img src={map} alt="map"/>*/}

                                        <div id='pac-container'>
                                            <input id='pac-input' type='text' onChange={onChangeData('place_formatted')} value={place_formatted} placeholder='Add location (city, state or country)' />

                                        </div>
                                        <div id='map'>
                                        </div>
                                    
                                    

                                    <div className="startfloat d-flex">
                                    <p  onClick={onNext} className="btn startbtn">Next</p><p className="press">PressEnter</p>
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

export default AdvertForm4;