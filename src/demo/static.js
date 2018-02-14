import React from 'react';
import { Flex, Abs, Icon, Image, Page, Placeholder, Text, TouchableFlex } from '../components';
export class Static2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true
        }
    }
    render(){
        return( <Page title='实例页面11'>
            {this.state.show?<div>实例页面1</div>:null}
            <TouchableFlex onTap={()=>{this.setState({show:!this.state.show})}}>去实例页面22</TouchableFlex>
        </Page>)
    }
}