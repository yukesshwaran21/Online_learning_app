import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 23.79,
            lng: 90.41
        },
        zoom: 15
    };

    render() {
      
        const mark = <FontAwesomeIcon style={{ color: 'red' }} icon={faMapMarkerAlt} />
        const call = <FontAwesomeIcon style={{ color: 'red' }} icon={faPhoneVolume} />
        const mail = <FontAwesomeIcon style={{ color: 'red' }} icon={faEnvelopeSquare} />
        return (
            <div className="mx-auto rounded mt-2" style={{ width: '50%',marginTop:'50%'}}>
                <div>
                    <h3><u>Our Address</u> </h3>
                    <h5>{mark} 18, College Road, Chennai, Tamil Nadu 600006</h5>
                    <p>{call} +91 9965175741</p>
                    <p>{mail} abc@infotech.com</p>
                </div>
            </div>
        );
    }
}


export default SimpleMap;