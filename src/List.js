import React, { Component } from 'react'
import request from 'superagent';

export default class List extends Component {
    state = { data:null }
    async componentDidMount() {
        const data = await request.get(`https://serene-scrubland-75154.herokuapp.com/weapons`);
        this.setState({ data: data.body })
    }
    render() {
        console.log(this.state.data)
        return (
            <div>

                
            </div>
        )
    }
}
