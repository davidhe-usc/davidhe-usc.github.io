import React from 'react';
import {Container, Row} from 'react-bootstrap'
import Resume from '../../../assets/Resume Mk IX.pdf'

const FooterThree = ({position}) => {
    return (
        <div className={`footer-section section position-${position} pt-30 pb-30`}>
            <Container fluid>
                <Row className={'align-items-center'}>
                    <div className={'footer-copyright col-lg-4 col-12 order-lg-1 order-3'}>
                        <p>&copy; {new Date().getFullYear()} DAVID HE. ALL RIGHT RESERVED</p>
                    </div>

                    <div className="footer-resume col-lg-8 col-12 order-lg-3 order-3 text-right">
                        <a href={Resume} download>RESUME</a>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default FooterThree;
