import React, { Component } from 'react';
import "./PageHeader.scss";


export default class PageHeader extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return(
            <div className="title">
                {
                    this.props.showBack==true?(
                        <span className="back">&#xe853;</span>
                    ):null
                }
                
            {this.props.children}
            </div>
        )
    }
}