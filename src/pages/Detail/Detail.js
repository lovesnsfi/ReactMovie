import React,{Component} from "react";
import "./Detail.scss";
import Page from '../../components/Page/Page';
import PageHeader from "../../components/PageHeader/PageHeader";

export default class Detail extends Component{
    constructor(props){
        super(props);
        console.log(this.props.location.query);
    }
    render(){
        return (
            <Page>
                <PageHeader showBack={true} history={this.props.history}>电影详细信息</PageHeader>
            </Page>
        )
    }
}