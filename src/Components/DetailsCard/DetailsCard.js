import React from 'react'
import "./DetailsCard.css"
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';


const DetailsCard = () => {
    return (
        <div className="detailsContainer">

            <div>
                <div className="detailImgContainer">
                <Slide bottom>
                <LazyLoad>
                    <img
                    src="img/nature1.jpg"
                    alt="DetailOne"
                    className="detailImg"/>
                    </LazyLoad>
                    </Slide>
                </div>
                <Fade left >
                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                <p className="detailsText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </Fade>
            </div>
            <div>
                <div className="detailImgContainer">
                <Slide bottom>
                <LazyLoad>
                <img
                    src="img/nature2.jpg"
                    alt="DetailOne"
                    className="detailImg"/>
                </LazyLoad>
                    
                </Slide>
                </div>
                <Fade left >
                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                <p className="detailsText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </Fade>
                
            </div>
        </div>
    )
}

export default DetailsCard
