import React, {Fragment} from 'react';
import Switcher from "./components/Switcher";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/*
* @ Component Imported
* */
import TeamPage from "./pages/team";
import AboutPage from "./pages/about";
import ErrorPage from "./pages/404Error";
import ContactPage from "./pages/contact";
import ServicePage from "./pages/service";
import HomeDefault from "./pages/home/HomeDefault";
import PortfolioDetailsPage from "./pages/portfolio/details";
import PortfolioMasonryFourColumnPage from "./pages/portfolio/masonry/four-column";
import PortfolioMasonryFourColumnFullWidthPage from "./pages/portfolio/masonry/four-column-fullwidth";

const App = () => {
    return (
        <Fragment>
            <Switcher/>
            <Router>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/contact"}`}
                           component={ContactPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/team"}`}
                           component={TeamPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/service"}`}
                           component={ServicePage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio/:slug"}`}
                           component={PortfolioDetailsPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-four-column-fullwidth"}`}
                           component={PortfolioMasonryFourColumnFullWidthPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-four-column"}`}
                           component={PortfolioMasonryFourColumnPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/about"}`}
                           component={AboutPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-default"}`}
                           component={HomeDefault}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/"}`}
                           component={HomeDefault}
                    />
                    <Route exact component={ErrorPage}/>
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;