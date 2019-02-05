import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import GnomoImage from '../image/gnomo-icon.png';
import Header from './Header';

class GnomeCard extends Component {


    componentWillMount() {
        const gnomeId = this.props.match.params.id
        this.props.dispatch(actions.fetchGnomeById(gnomeId))
    }

    componentDidMount() {
        document.title = this.props.gnome.name;
        window.scrollTo(0, 0)
    }


    weightRange(weight) {
        if (weight < 38) return "thin"
        if (weight >= 38 && weight <= 41) return "healthy"
        if (weight > 41) return "fat"
    }

    heightRange(height) {
        if (height < 100) return "short"
        if (height >= 100 && height <= 120) return "ordinary"
        if (height > 120) return "tall"
    }

    listProfessions(professions) {
        if (professions.length) {
            return professions.map(profession => {
                return (
                    <li>{profession}</li>
                )
            })
        } else {
            return (<p>This Gnome hasn't found his profession yet</p>)
        }
    }

    listFriends(friends) {
        if (friends.length) {
            return friends.map(friend => {
                return (
                    <li>{friend}</li>
                )
            })
        } else {
            return (<p>This gnome doesn't share his live with anybody</p>)
        }
    }


    render() {
        const { name, thumbnail, age, height, weight, hair_color, friends, professions } = this.props.gnome

        return (<div className="gnome-card">
            <Header />
            {
                this.props.gnome && (<div className="gnome">
                    <div className="grid-1 center column">
                        <div className="center thumbnail-box"><img src={thumbnail} title="gnome photo" alt="thumbnail" className="thumbnail" /></div>
                        <div className="name-box"><p className="name">{name}, {age}</p></div>
                    </div>
                    <div className="grid-2 center column">
                        <div className={`color-${hair_color}`}>
                            <div className="gnome-paint">
                                <div className={`gnome-width-${this.weightRange(weight)} gnome-height-${this.heightRange(height)}`}><img src={GnomoImage} alt="gnome" className="gnome-paint-draw" /></div>
                            </div>
                        </div>
                        <div className="size-box">
                            <p>Height: {height}</p>
                            <p>Weight: {weight}</p>
                        </div>
                    </div>
                    <div className="grid-3 align-top">
                        <div>
                            <h2>Professions:</h2>
                            {
                                professions && (<ul>
                                    {this.listProfessions(professions)}
                                </ul>
                                )}
                        </div>
                    </div>
                    <div className="grid-4 align-top">
                        <div>
                            <h2>Friends:</h2>
                            {
                                friends && (<ul>
                                    {this.listFriends(friends)}
                                </ul>)
                            }
                        </div>
                    </div>
                </div>)
            }
        </div>)
    }
}


function mapStateToProps(state) {
    return {
        gnome: state.gnome.data
    }
}

// export default connect(mapStateToProps)(GnomeCard)
export default withRouter(connect(mapStateToProps)(GnomeCard))
// export default withRouter(GnomeCard)