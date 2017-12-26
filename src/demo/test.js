import React from 'react';
import { Flex, Abs, Icon, Image, Page, Placeholder, Text, TouchableFlex } from '../components';
import PropTypes from 'prop-types';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
export function Page1({ }, context) {
    return (
        <Page title='实例页面11'>
            <div>实例页面1</div>
            <Button onClick={()=>{context.router.history.push('page2')}}>去实例页面22</Button>
        </Page>
    );
}
Page1.contextTypes = {
    router: PropTypes.object
};
export function Page2({ }, context) {
    return (
        <Page title='实例页面22'>
            <div>实例页面2</div>
            <TouchableFlex onTap={()=>{context.router.history.push('/')}}>去实例页面1</TouchableFlex>
        </Page>
    );
}
Page2.contextTypes = {
    router: PropTypes.object
};