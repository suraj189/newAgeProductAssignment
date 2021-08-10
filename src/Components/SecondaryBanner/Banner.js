import React ,{ Fragment} from 'react'
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';
import "./Banner.css"
 const Banner = () => {
    return (

        <Fragment>
            <div className="secondaryBanner">
                <LazyLoad>
                    <img
                        src="https://dummyimage.com/1320x600/665cd6/73899e"
                        alt="SecondaryBanner"
                        className="secondaryBannerImg" />
                </LazyLoad>
                
                <div className="secondarybannerText">
                <Fade right>
                    <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </Fade>
                </div>
                   
            </div>
            </Fragment>

            )
}

export default Banner
