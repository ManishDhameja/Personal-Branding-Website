import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footers">
            <div className="footer bottom-menu bottom-menu-inverse">
                <div className="contain">

                    <div className="cwm-social-icons">
                        <a href="https://www.facebook.com/ghurkaayush/" target="_blank" rel="noreferrer"><img src="https://cdn.fs.teachablecdn.com/yho35aJlSICjNd8Pe6Zk" height="50" alt=""/></a>
                        <a href="https://twitter.com/ayushghurka" target="_blank" rel="noreferrer"><img src="https://cdn.fs.teachablecdn.com/YjXpg90MTCWsPzj9TI3g" height="50" alt=""/></a>
                        <a href="https://www.youtube.com/channel/UCVrnkjUlLE7h0zcdn1kM6tA" target="_blank" rel="noreferrer"><img src="https://cdn.fs.teachablecdn.com/d0LbDKI1SKq7DjycxGA4" height="50" alt=""/></a>
                    </div>



                    <div className="roww">
                        <div className="col-xs-12 col-sm-4 col-md-4 footer-column">
                            <p className="foots">
                                ©
                                Ayush Ghurka
                                2021
                            </p>
                        </div>
                        {/* <div class="col-xs-12 col-sm-4 col-md-4 footer-column">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="/p/terms">
                                        Terms of Use
                                    </a>
                                </li>
                                <li>
                                    <a href="/p/privacy">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                        <div className="col-xs-12 col-sm-4 col-md-4 footer-column">




                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
