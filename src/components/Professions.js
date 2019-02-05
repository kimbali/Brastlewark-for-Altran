import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import logic from '../logic/index.js';

import GnomeListItem from './GnomeListItem';

class Professions extends Component {

    state = {
        profession: '',
        workers: [],
        error: ''
    }

    componentDidMount() {
        document.title = "Brastlewark";
        window.scrollTo(0, 0)
    }

    componentWillMount() {
        this.props.dispatch(actions.fetchGnomes())
    }

    professionsOptions() {
        if (this.props.gnomes.Brastlewark) {
            const professions = logic.professions(this.props.gnomes.Brastlewark)

            return professions.map(profession => {
                return (<option value={profession}>{profession}</option>)
            })
        }
    }

    handleProfessionSelected = event => {
        this.setState({ profession: event.target.value, error: '' })
    }

    handleSubmit() {
        if (this.state.profession.length) {
            return logic.searchGnomesByProfession(this.state.profession)
                .then(workers => {
                    return this.setState({ workers, error: '' })
                })
        } else {
            return this.setState({ error: ' Please, select a profession' })
        }
    }

    listWorkers() {
        return this.state.workers.map(worker => {
            return (
                <Link className="zero center" to={`/brastlewark/${worker.id}`}>
                    <li className="zero">
                        <GnomeListItem gnome={worker} />
                    </li>
                </Link>
            )
        })
    }

    handleAge() {
        return logic.sortByAge(this.state.workers)
            .then(gnomes => {
                return this.setState({ workers: gnomes })
            })
    }

    handleHeight() {
        if (this.state.workers) {
            return logic.sortByHeight(this.state.workers)
                .then(gnomes => {
                    return this.setState({ workers: gnomes })
                })
        }
    }

    handleWeight() {
        if (this.state.workers) {
            return logic.sortByWeight(this.state.workers)
                .then(gnomes => {
                    return this.setState({ workers: gnomes })
                })
        }
    }

    bestWarriors() {
        logic.bestWarriors(this.state.workers)
            .then(gnomes => {
                return this.setState({ workers: gnomes })
            })
    }

    render() {
        return (
            <div className="finder">
                <div className="text-box">
                    <p>Gnomes in this town are not really social because they have too much work to do. Thats the reason they can have more than one job and may have few or even no friends at all. This is the perfect town to find workers that can repair succesfully your armour and weapons, they live to work so they will help you thankfully.</p>
                    <p>Find below the workers that you need:</p>
                    <form className="profession-form center column " onSubmit={() => { this.handleSubmit() }}>
                        <select id="profession-select" onChange={this.handleProfessionSelected}>
                            <option value="">Select a profession</option>
                            {this.professionsOptions()}
                        </select>
                        <button type="submit" className="btn">find workers</button>
                        {
                            this.state.error && (<div className="error">
                                <p>{this.state.error}</p>
                            </div>)
                        }
                    </form>
                </div>
                {
                    this.state.workers.length !== 0 && (<div>
                        <div className="background-colored">
                            <p className="center-text">¿Are you looking for warriors?</p>
                            <div className="sort-buttons center">
                                <div className="sort-button center">
                                    <i class="fas fa-arrow-up"></i>
                                    <button onClick={() => { this.handleAge() }}>the yonguest first</button>
                                </div>
                                <div className="sort-button center">
                                    <i class="fas fa-arrow-up"></i>
                                    <button onClick={() => { this.handleHeight() }}>tallest first</button>
                                </div>
                                <div className="sort-button center">
                                    <i class="fas fa-arrow-up"></i>
                                    <button onClick={() => { this.handleWeight() }}>athletics ones first</button>
                                </div>
                            </div>
                            <div className="center biggest-btn">
                                <button className="btn" onClick={() => { this.bestWarriors() }}>only the biggest and younguest</button>

                            </div>
                        </div>
                        <h2 className="center-text">There are {this.state.workers.length} {this.state.profession} gnomes in Brastlewark</h2>
                        <div>
                            <ul className="wrapper">
                                {this.listWorkers()}
                            </ul>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        gnomes: state.gnomes.data
    }
}

export default withRouter(connect(mapStateToProps)(Professions))



// export default withRouter(Professions)