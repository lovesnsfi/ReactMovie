import React, { Component } from 'react';
import "./Hot.scss";
import axios from "axios";
import MovieItem from '../../components/MovieItem/MovieItem'

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
                       <MovieItem mitem={item} key={item.id} history={this.props.history}/>
                    )
                })}
            </div>
        )
    }
}
