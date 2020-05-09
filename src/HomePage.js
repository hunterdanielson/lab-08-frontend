import React, { Component } from 'react'
import List from './List.js';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Link to="/about">About</Link>
                <br/>
                <Link to="/form">Form</Link>
                <List />
            </div>
        )
    }
}
