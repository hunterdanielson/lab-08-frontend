import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { removeElement } from './api-calls.js';

export default class ListItem extends Component {
    handleRemove = async () => {
        console.log('reomve', this.props.weapon.id)
        await removeElement(this.props.weapon.id);
        
    }
    render() {
        const weapon = this.props.weapon;
        return (
            <div>
                <Link to={`/weapons/${weapon.id}`}>
                    <h2>{weapon.name}</h2>
                </Link>
                <section>Stats
                    <div>Attack: {weapon.attack}</div>
                    <div>Affinity: {weapon.affinity}</div>
                </section>
                <p>Element: {weapon.element}</p>
                {weapon.is_longsword 
                ? <p>It's a longsword</p>
                : <p>It's a hammer</p>
            }
            <button onClick={this.handleRemove}>Remove</button>
            </div>
        )
    }
}
