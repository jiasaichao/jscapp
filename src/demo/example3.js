import React from 'react';
import { Flex, Abs, Icon, Image, Page, Placeholder, Text, TouchableFlex } from '../components';
export default class Static2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <Page title='实例页面003'>
                {this.state.show ? <div>实例页面003</div> : null}
                <TouchableFlex onTap={() => { this.setState({ show: !this.state.show }) }}>去实例页面22</TouchableFlex>
            </Page>
        )
    }
}