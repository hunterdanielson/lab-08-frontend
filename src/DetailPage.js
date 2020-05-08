import React, { Component } from 'react';
import request from 'superagent';
import ListItem from './ListItem';
import loading from './loading.gif';

export default class DetailPage extends Component {
    state = { data: null }
    async componentDidMount() {
        const data = await request.get(`https://serene-scrubland-75154.herokuapp.com/weapons/${this.props.match.params.id}`);
        this.setState({ data: data.body })
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                {
                    this.state.data
                    ? <ListItem weapon={this.state.data[0]} />
                    : <img src={loading} alt='loading' />
                }
            </div>
        )
    }
}
