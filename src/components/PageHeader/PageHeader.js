import React, { Component } from 'react';
import "./PageHeader.scss";

export default class PageHeader extends Component{

    render(){
        return(
            <div className="title">
                {
                    this.props.showBack===true?(
                        <span className="back" onClick={event=>{
                            this.props.history.goBack()
                        }}>&#xe853;</span>
                    ):null
                }
                
            {this.props.children}
            </div>
        )
    }
}