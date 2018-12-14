import React, { Component } from 'react'
import "./MovieItem.scss";
export default class MovieItem extends Component {
  render() {
      const item=this.props.mitem;
    return (
        <div className="box" onClick={event=>{
            this.props.history.push({
                pathname:"/detail",
                query:{
                    id:item.id
                }
            });
        }}>
            <div className="comingTitle">
                {this.props.children}
            </div>
            <div className="m-item" key={item.id}>
                <div className="left">
                    <img src={item.img.replace("w.h","128.180")} alt="电影海报"></img>
                </div>
                <div className="center">
                    <div className="m_title">{item.nm}</div>
                    {item.globalReleased===true?(<div>观众评：<span>{item.sc}</span></div>):(
                        <div><span>{item.wish}</span>想看</div>
                    )}
                    <div>主演: {item.star}</div>
                    <div>{item.showInfo}</div>
                </div>
                <div className="right">
                    {item.globalReleased===true?(
                        <button type="button" className="btnBuy">购票</button>
                    ):(
                        <button type="button" className="btnPre">预售</button>
                    )}
                </div>
            </div>
        </div>
        
    )
  }
}
