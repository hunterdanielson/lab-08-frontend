import React, { Component } from 'react'
import ListItem from './ListItem.js';
import loading from './loading.gif';
import { getWeapons, getElements } from './api-calls.js';

export default class List extends Component {
    state = { data: null, elements: null, filter: '' }
    async componentDidMount() {
        const data = await getWeapons();
        const elements = await getElements();
        this.setState({ data: data, elements: elements })
    }
    handleChange = (e) => {
        this.setState({ filter: e.target.value })
    }
    render() {
        console.log('filter', this.state.filter)
        return (
            <div>
                {this.state.elements && 
                <select onChange={this.handleChange}>
                    <option value="">Show all</option>
                    {
                        this.state.elements.map(
                            element => <option value={element.element}>{element.element}</option>
                            )
                    }
                </select>
                }
                <h1>Monster Hunter World Weapons</h1>
                {this.state.data
                ? this.state.data
                .filter(weapon => {
                    if(!this.state.filter) return true;
                    return weapon.element === this.state.filter
                })
                .map(weapon => {
                    return <ListItem weapon={weapon}/>
                })
                : <img src={loading} alt="loading"/>
            }
            </div>
        )
    }
}
