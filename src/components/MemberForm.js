import React, { Component } from 'react';

export default class MemberForm extends Component {
    render() {
        return (
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.phone}</td>
                    <td>{this.props.project}</td>
                </tr>
        );
    }
}