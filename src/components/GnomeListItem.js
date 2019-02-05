import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import GnomoImage from '../image/gnomo-icon.png';

class GnomeListItem extends Component {

    
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

    render() {

        const { name, age, hair_color, weight, height } = this.props.gnome

        return (
            <div className={`gnome-list-item color-${hair_color}`}>
                <div className="gnome-list-item-container ">
                    <img className={`thumbnail gnome-width-${this.weightRange(weight)} gnome-height-${this.heightRange(height)}`} src={GnomoImage} alt="thubnail gnome" />
                    <div className="age-box" ><p className="age">{age}</p></div>
                </div>
                <div className="name-box" ><p className="name center-text">{name}</p></div>
            </div>

        )
    }
}

export default withRouter(GnomeListItem)