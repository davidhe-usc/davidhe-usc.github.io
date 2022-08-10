import React from 'react';
import Resume from '../../../assets/Resume Mk IX.pdf'

const FooterTwo = ({loadHandler, allItems}) => {
    return (
        <div className="footer-section position-fixed section pt-30 pb-30">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="footer-copyright col-lg-4 col-12 order-lg-1 order-3">
                        <p>&copy; {new Date().getFullYear()} DAVID HE. ALL RIGHT RESERVED</p>
                    </div>

                    <div className="col-lg-4 col-12 d-flex justify-content-center order-lg-2 order-1 mb-sm-15 mb-xs-15">
                        <button
                            className={`load-more-btn ${allItems ? 'disabled' : null}`}
                            onClick={() => {
                                loadHandler()
                            }}
                        >
                            LOAD MORE...
                        </button>
                    </div>

                    <div className="footer-resume col-lg-4 col-12 order-lg-3 order-3 text-right">
                        <a href={Resume} download>RESUME</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTwo;
