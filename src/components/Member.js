import React, { Component } from 'react';
import axios from 'axios';
import MemberForm from './MemberForm';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';

class Member extends Component {
    constructor(props) {
        super(props);
        this.addMember = this.addMember.bind(this);
    }

    componentWillMount() {
        this.props.getAllMem();
    }

    componentWillReceiveProps(nextProps) {
        nextProps.arrMems = this.props.getAllMem();
    }

    addMember() {
        const { name, phone, project } = this.refs;
        // const newMem = new NewMember(name, phone, project)
        // this.setState({ arrMem: this.state.arrMem.concat(newMem) })
        axios.post('http://localhost:4000/member', {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            name: name.value,
            phone: phone.value,
            project: project.value
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        name.value = '';
        phone.value = '';
        project.value = '';
    }

    render() {
        return (
            <div className="containter">
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="form-group">
                            <legend>Thêm Member</legend>
                        </div>
                        <input className="form-control" type="text" placeholder="Enter Name" ref="name" />
                        <br /><br />
                        <input className="form-control" type="text" placeholder="Enter Phone Number" ref="phone" />
                        <br /><br />
                        <input className="form-control" type="text" placeholder="Enter Project" ref="project" />
                        <br /><br />
                        <button className="btn btn-primary" onClick={this.addMember}>Create Member</button>

                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <h4>Danh sách Member</h4>
                        <table className="table table-hover">
                            <thead>
                                <tr className="text-primary danger ">
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Project</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.arrMems.map((member, index) =>
                                    <MemberForm
                                        key={index}
                                        name={member.name}
                                        phone={member.phone}
                                        project={member.project}
                                    />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ arrMems: state.arrMems }); 

export default connect(mapStateToProps, actionCreators)(Member);
