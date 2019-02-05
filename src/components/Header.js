import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Header extends Component {

    state = {
        heroName: sessionStorage.getItem('hero')
    }



    render() {
        return (
           <header>
               <Link className="no-margin" to="/brastlewark"><h2 className="uppercase ">brastlewark</h2></Link>
               <Link className="no-margin" to="/"><p className="name">{this.state.heroName}</p></Link>
           </header>
        )
    }
}


export default withRouter(Header)