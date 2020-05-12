import React, { Component } from 'react';
import ListItem from './ListItem';
import loading from './loading.gif';
import { getWeapon } from './api-calls.js';

export default class DetailPage extends Component {
    state = { data: null }
    async componentDidMount() {
        const data = await getWeapon(this.props.match.params.id);
        this.setState({ data: data })
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                {
                    this.state.data
                    ? <ListItem weapon={this.state.data} />
                    : <img src={loading} alt='loading' />
                }
            </div>
        )
    }
}
