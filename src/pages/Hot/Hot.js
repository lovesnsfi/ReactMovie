import React, { Component } from 'react';
import "./Hot.scss";
import movieImg from "../../img/01.jpg";
import axios from "axios";

export default class Hot extends Component {
    constructor(props) {
        super(props);
        this.state={
            hotList:[]
        }
    }
    componentWillMount(){
        axios.get("https://www.softeem.xin/maoyanApi/ajax/movieOnInfoList").then(res=>{
            this.setState({
                hotList:res.data.movieList
            });
        })
    }
    
    render() {
        return (
            <div className="hot">
                {this.state.hotList.map((item)=>{
                    return (
                        <div className="m-item" key={item.id}>
                            <div className="left">
                                <img src={item.img.replace("w.h","128.180")}></img>
                            </div>
                            <div className="center">
                                <div className="m_title">{item.nm}</div>
                                <div>观众评：<span>{item.sc}</span></div>
                                <div>主演: {item.star}</div>
                                <div>{item.showInfo}</div>
                            </div>
                            <div className="right">
                                <button type="button" className="btnBuy">购票</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
