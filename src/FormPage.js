import React, { Component } from 'react'

export default class FormPage extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Attack:
                        <input type="number" name="attack" />
                    </label>
                    <label>
                        Affinity:
                        <input type="number" name="affinity" />
                    </label>
                    <label>
                        Element:
                        <input type="text" name="element" />
                    </label>
                    <label>
                        Is it a long sword?
                        <input type="checkbox" name="is_longsword" value="true" />
                    </label>
                    <input type="submit" value="submit" />
                </form>
                
            </div>
        )
    }
}
