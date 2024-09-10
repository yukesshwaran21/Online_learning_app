import ContactUs from '../ContactUs/ContactUs';
import SimpleMap from '../SimpleMap/SimpleMap';
import TitleAbout from '../TitleAbout/TitleAbout';
import ViewCourses from '../ViewCourses/ViewCourses';
import WhatsBest from '../WhatsBest/WhatsBest';


const About = () => {
    return (
        <div className="container">
            <TitleAbout />
            <WhatsBest />
            <SimpleMap />
            <ContactUs />
            <ViewCourses />
        </div>
    );
};

export default About;