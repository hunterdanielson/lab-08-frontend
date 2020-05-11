import React, { Component } from 'react';
import { addWeapon } from './api-calls.js';
import request from 'superagent';

export default class FormPage extends Component {
    state = {
        name: '',
        attack: 0,
        affinity: 0,
        element: '',
        is_longsword: false,
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        // const addNewWeapon = await request.post('http://localhost:3001', this.state);
        const addNewWeapon = await request.post(`https://serene-scrubland-75154.herokuapp.com/weapons/`, this.state)
        // const newWeapon = await addWeapon(this.state);
        this.setState({ sucess: addNewWeapon });
    };
    handleInput = (e) => {
        const newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    
    render() {
        const { name, attack, affinity, element } = this.state;
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Add a new weapon</h1>
                    <label>
                        Name:
                        <input onChange={this.handleInput} value={name} type="text" name="name" />
                    </label>
                    <label>
                        Attack:
                        <input onChange={this.handleInput} value={attack} type="number" name="attack" />
                    </label>
                    <label>
                        Affinity:
                        <input onChange={this.handleInput} value={affinity} type="number" name="affinity" />
                    </label>
                    <label>
                        Element:
                        <input onChange={this.handleInput} value={element} type="text" name="element" />
                    </label>
                    <label>
                        Is it a long sword?
                        <label>
                            Yes
                            <input onChange={this.handleInput} value="true" type="radio" name="is_longsword" />
                        </label>
                        <label>
                            No
                            <input onChange={this.handleInput} value="false" type="radio" name="is_longsword" />
                        </label>
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
