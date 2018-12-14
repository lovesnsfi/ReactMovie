import React, { Component } from 'react';
import axios from "axios";
import MovieItem from '../../components/MovieItem/MovieItem';
import "./Coming.scss";
export default class Coming extends Component {
    constructor(props){
        super(props);
        this.state={
            comingList:[]
        }
    }
    componentWillMount(){
        axios.get("https://www.softeem.xin/maoyanApi/ajax/comingList?ci=57&token=&limit=10").then(res=>{
            this.setState({
                comingList:res.data.coming
            });
        }).catch(err=>{
            console.log("数据请求错误");
        })
    }
  render() {
    return (
      <div className="coming">
        {this.state.comingList.map(item=>{
            return (
                <MovieItem mitem={item} key={item.id} history={this.props.history}>
                    {item.comingTitle}
                </MovieItem>
            )
        })}
      </div>
    )
  }
}
