import React, { Component } from 'react'
import request from 'superagent';
import ListItem from './ListItem.js';
import loading from './loading.gif';
// import { getWeapons } from './api-calls.js';

export default class List extends Component {
    state = { data: null }
    async componentDidMount() {
        const data = await request.get(`https://serene-scrubland-75154.herokuapp.com/weapons`);
        // the following returns a promise and the array I need is inside the [promiseValue]
        // not sure how to access just the promise value right now
        // const newData = getWeapons();
        // console.log(newData);
        this.setState({ data: data.body })
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
