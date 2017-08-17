import React, { Component } from 'react';
import Member from './Member';
import Project from './Project';

export default class App extends Component {
    render() {
        return (
            <div>
                <Member />
                <Project />
            </div>
        );
    }
}