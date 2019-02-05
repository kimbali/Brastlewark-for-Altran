import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Professions from './Professions';

class HomePage extends Component {

    componentDidMount() {
        document.title = "Brastlewark";
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Header />
                <div className="down-header center">
                    <Professions />
                </div>
            </div>
        )
    }
}


export default withRouter(HomePage)