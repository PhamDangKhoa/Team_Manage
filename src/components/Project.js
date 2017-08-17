import React, { Component } from 'react';
import ProjectList from './ProjectList';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';

class Project extends Component {
    constructor(props) {
        super(props);
        this.addProject = this.addProject.bind(this);
    }

    addProject() {
        const name = this.refs.txtname.value;
        const listext = this.refs.txtList.value;
        const listmember = listext.split(",");
        // const newproject = new newProject(name, listmember);
        // this.setState({ arrProject: this.state.arrProject.concat(newproject) })

        fetch('http://localhost:4000/project', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, listmember: listmember })
        })
            .then(res => res.json())
            .then(res => console.log(res));

        this.refs.txtname.value = '';
        this.refs.txtList.value = '';
    }

    componentWillMount() {
        this.props.getAllPro();
    }

    componentWillReceiveProps(nextProps) {
        nextProps.arrMems = this.props.getAllPro();
    }

    render() {
        return (
            <div className="containter">
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="form-group">
                            <legend>Thêm Project</legend>
                        </div>
                        <input type="text" className="form-control" placeholder="Enter Project Name" ref="txtname" />
                        <br /><br />
                        <input type="text" className="form-control" placeholder="Add Members" ref="txtList" />
                        <br /><br />
                        <button className="btn btn-success" onClick={this.addProject}>Create Project</button>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <h4>Danh sách Project</h4>
                        <table className="table table-hover">
                            <thead>
                                <tr className="text-info success">
                                    <th>Name</th>
                                    <th>List Member</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.arrProjects.map((project, index) =>
                                    <ProjectList
                                        key={index}
                                        name={project.name}
                                        listmember={project.listmember}
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

const mapStateToProps = (state) => ({ arrProjects: state.arrProjects }); 

export default connect(mapStateToProps, actionCreators)(Project);