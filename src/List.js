import React, { Component } from 'react'
import ListItem from './ListItem.js';
import loading from './loading.gif';
import { getWeapons } from './api-calls.js';

export default class List extends Component {
    state = { data: null }
    async componentDidMount() {
        const data = await getWeapons();
        this.setState({ data: data })
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                <h1>Monster Hunter World Weapons</h1>
                {this.state.data
                ? this.state.data.map(weapon => {
                    return <ListItem weapon={weapon}/>
                })
                : <img src={loading} alt="loading"/>
            }
            </div>
        )
    }
}
