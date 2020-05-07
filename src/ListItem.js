import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        const weapon = this.props.weapon;
        return (
            <div>
                <h2>{weapon.name}</h2>
                <section>Stats:
                    <div>Attack: {weapon.attack}</div>
                    <div>Affinity: {weapon.affinity}</div>
                </section>
                <p>Element: {weapon.element}</p>
                {weapon.is_longsword && <p>It's a longsword</p>}
            </div>
        )
    }
}
