import React, { Component } from 'react';
import "./Movie.scss";
import Page from "../../components/Page/Page";
import PageHeader from "../../components/PageHeader/PageHeader";
import Hot from "../Hot/Hot";
import Coming from '../Coming/Coming';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'



export default class Movie extends Component{
    constructor(props){
        super(props);
        this.state={
            pageType:0
        }
    }
    componentDidMount(){
        var that=this;
        let mySwiper = new Swiper('.swiper-container', {
            on:{
                slideChangeTransitionStart(){
                   that.setState({
                       pageType:this.activeIndex
                   });
                }
            }
        });
        this.setState({
            mySwiper:mySwiper
        });

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
                        this.state.mySwiper.slideTo(0);
                    }}>正在热映</li>
                    <li className={this.state.pageType===1?'active':null} onClick={event=>{
                        this.setState({
                            pageType:1
                        });
                        this.state.mySwiper.slideTo(1);
                    }}>即将上映</li>
                </ul>
                <div className="border-bottom">
                    <div className={`border-bottom-bar ${this.state.pageType==1?'active':null}`}></div>
                </div>
                <div className="swiperContent">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <Hot></Hot>
                            </div>
                            <div className="swiper-slide">
                                <Coming></Coming>
                            </div>

                        </div>
                    </div>
                </div>
            </Page>
        )
    }
}
