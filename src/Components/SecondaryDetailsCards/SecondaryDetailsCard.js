import React from 'react'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';

import "./SecondaryDetailsCards.css"

const SecondaryDetailsCard = () => {



    return (
        <div className="secondaryDeatilsContainer">
            <div className="rightContainer">
                <div>
                    <Slide left>
                    <LazyLoad>
                        <img
                            src="img/Nature3.jpg"
                            alt="Nature"
                        />
                        </LazyLoad>
                    </Slide>
                </div>
                <Fade right >
                    <div>
                        <h3>"Lorem Ipsum is simply dummy text  </h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not .It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                </Fade>
            </div>
            <div className="leftContainer">
                <Fade left >
                    <div>
                        <h3>"Lorem Ipsum is simply dummy text  </h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not .It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                </Fade>


                <div>
                    <Slide right>
                    <LazyLoad>
                        <img
                            src="img/Nature4.jpg"
                            alt="Nature"
                        />
                        </LazyLoad>
                    </Slide>
                </div>

            </div>
            <div className="rightContainer">
                <div>
                    <Slide left>
                    <LazyLoad>
                    <img
                            src="img/Nature3.jpg"
                            alt="Nature"
                        />
                    </LazyLoad>
                       
                    </Slide>
                </div>
                <Fade right >
                    <div>
                        <h3>"Lorem Ipsum is simply dummy text  </h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not .It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                </Fade>
            </div>
            <div className="leftContainer">
                <Fade left >
                    <div>
                        <h3>"Lorem Ipsum is simply dummy text  </h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not .It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                </Fade>


                <div>
                    <Slide right>
                    <LazyLoad>
                        <img
                            src="img/Nature4.jpg"
                            alt="Nature"
                        />
                        </LazyLoad>
                    </Slide>
                </div>

            </div>

        </div>
    )
}

export default SecondaryDetailsCard