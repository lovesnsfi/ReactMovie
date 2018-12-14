import React, { Component } from 'react';
import "./Movie.scss";
import Page from "../../components/Page/Page";
import PageHeader from "../../components/PageHeader/PageHeader";
import Hot from "../Hot/Hot";

export default class Movie extends Component{
    constructor(props){
        super(props);
        this.state={
            pageType:0
        }
    }

    render(){
        return (
            <Page className="movie">
                <PageHeader history={this.props.history}>猫眼电影</PageHeader>
                <ul className="topNav">
                    <li className={this.state.pageType===0?'active':null} onClick={event=>{
                        this.setState({
                            pageType:0
                        });
                    }}>正在热映</li>
                    <li className={this.state.pageType===1?'active':null} onClick={event=>{
                        this.setState({
                            pageType:1
                        })
                    }}>即将上映</li>
                </ul>
                <div className="border-bottom">
                    <div className={["border-bottom-bar",this.state.pageType===1?"active":null].join(' ')}></div>
                </div>
                <div className="swiperContent">
                    {
                        this.state.pageType==0?(
                            <Hot></Hot>
                        ):(null)
                    }
                </div>
            </Page>
        )
    }
}
