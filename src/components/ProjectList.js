import React, { Component } from 'react';

export default class ProjectList extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.listmember.map((mem, index) => 
                    <span key={index}>
                        {mem},{' '}
                    </span>
                )}</td>
            </tr>
        );
    }
}