import React, { Component } from 'react';
import "./Page.scss";

export default class Page extends Component{
    render(){
        return (
            <div className="Page">
                {this.props.children}
            </div>
        )
    }
}