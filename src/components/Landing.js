import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Landing extends Component {

    state = {
        name: 'Hero',
        thereIsHero: false
    }

    componentDidMount() {
        document.title = "Gnomeland";
        window.scrollTo(0, 0)
    }

    handleName = (event) => {
        this.setState({ name: event.target.value })
    }

    confirm = (event) => {
        event.preventDefault()

        sessionStorage.setItem('hero', this.state.name)

        this.setState({ thereIsHero: true })
    }

    changeName = () => {
        this.setState({ thereIsHero: false })
        sessionStorage.clear()
    }


    render() {
        return (
            <div className="center vh-vw">
                <div className="center column landing">
                    {
                        !this.state.thereIsHero && (<div>
                            <h1 className="center-text uppercase">wellcome to siri gnome</h1>
                            <p className="center-text">You are in brastlewark today, let's anoncunce to the inhabitants that a hero has arrived at town!</p>
                            <form onSubmit={this.confirm} className="center column landing-form" autocomplete="off">
                                <label for="heroName">Please, enter your hero name:</label>
                                <input id="heroName" type="text" placeholder="Hero name here" onChange={this.handleName} />
                                <button className="btn" type="submit">Visit <span className="uppercase">brastlewark</span></button>
                            </form>
                        </div>)
                    }
                    {
                        this.state.thereIsHero && (<div className="center column">
                            <h1 className="uppercase center-text remove-margin">wellcome back {this.state.name}</h1>
                            <Link className="btn" to="/brastlewark">Visit brastlewark</Link>
                            <div className="back-link">
                                <i className="fas fa-chevron-left"></i>
                                <button onClick={this.changeName}>change the name</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}


export default withRouter(Landing)