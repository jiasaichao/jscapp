import React from 'react';
import ReactDOM from 'react-dom';
import { Flex, Abs, Icon, Image, Page, Placeholder, Text, TouchableFlex } from '../components';
import { Global } from '../utils/common'
class Static2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <Page title='实例页面001'>
                {this.state.show ? <div>实例页面001</div> : null}
                <TouchableFlex onTap={() => { window.location = '$dfqparam$' + JSON.stringify({ data: { url: ['example2.html', 'js/vendor1.js', 'js/components.js', 'js/example2.js'], title: '第二个页面' }, type: 1 }) }}>去实例页面22</TouchableFlex>
            </Page>
        )
    }
}
class GlobalComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        <div>

        </div>
    }
}
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <Static2 />
            </div>
        )
    }
}
/*global SERVERSIDERENDERING*/
if (SERVERSIDERENDERING) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
