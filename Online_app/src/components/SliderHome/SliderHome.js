import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';


const SliderHome = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/career")
    }
   
    const element = <FontAwesomeIcon icon={faSignInAlt} />
    return (
        <div className="mx-auto" style={{ display: 'block', width: '80%',marginBottom:'50px' }}>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 img-fluid "
                        style={{ height: '350px' }}
                        src="https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725580800&semt=ais_hybrid"
                        alt=""
                    />
                    <Carousel.Caption>
                        <div className="bg-white text-primary w-50 mx-auto rounded" style={{ opacity: 0.6 }}>
                            <h3>Online Degrees</h3>
                            <p>Study Flexibly Online</p>
                        </div>
                        <Button onClick={() => handleClick()} className="my-5 bg-success">{element} Click to view all Path Courses</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 img-fluid"
                        style={{ height: '350px' }}
                        src="https://t4.ftcdn.net/jpg/04/45/70/71/360_F_445707107_elptpcI7pUDPa9kMdnX9e3506QdHfo7r.jpg"
                        alt=""
                    />
                    <Carousel.Caption>

                        <div className="bg-white text-primary w-50 mx-auto rounded" style={{ opacity: 0.6 }}>

                            <h3>Learn new skills</h3>
                            <p>With  flexible courses</p>
                        </div>
                        <Button onClick={() => handleClick()} className="my-5 bg-success">{element} Click to view all Path Courses</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 img-fluid"
                        style={{ height: '350px' }}
                        src="https://png.pngtree.com/background/20240412/original/pngtree-illustration-of-3d-laptop-with-educational-tools-for-online-learning-picture-image_8464070.jpg"
                        alt=""
                    />
                    <Carousel.Caption>

                        <div className="bg-white text-primary w-50 mx-auto rounded" style={{ opacity: 0.6 }}>

                            <h3>Expert Teachers</h3>
                            <p>Upskill with specialist</p>
                        </div>
                        <Button onClick={() => handleClick()} className="my-5 bg-success">{element} Click to view all Courses</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SliderHome;