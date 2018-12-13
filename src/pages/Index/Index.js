import React, { Component } from 'react';
import {Route,NavLink} from "react-router-dom";
import Movie from "../Movie/Movie";
import Cinemal from "../Cinemal/Cinemal";
import "./Index.scss";
export default class Index extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const match=this.props.match;
        return (
            <div className="Index">
                <div className="routerViewContent">
                    <Route path={`${match.url}/movie`} component={Movie}/>
                    <Route path={`${match.url}/cinemal`} component={Cinemal}/>
                </div>
                <div className="tabBar">
                    <NavLink  to="/index/movie" className="link" activeClassName="active">
                        <span className="icon">&#xe626;</span>
                        <span className="text">影片</span>
                    </NavLink>
                    <NavLink to="/index/cinemal" className="link" activeClassName="active">
                        <span className="icon">&#xe655;</span>
                        <span className="text">影院</span>
                    </NavLink>
                    <NavLink to="/me" className="link" activeClassName="active">
                        <span className="icon">&#xe600;</span>
                        <span className="text">我的</span>
                    </NavLink>
                </div>
            </div>
        )
    }
}