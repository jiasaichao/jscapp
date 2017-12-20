import React from 'react'
import { withRouter, Switch, Route, HashRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types';

export class Router extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <HashRouter>
                <div style={{ height: '100%', width: '100%' }}>
                    <App />
                </div>
            </HashRouter>
        )
    }
}
const App = withRouter(({ location, history }) => {
    const currentKey = location.pathname.split('/')[1] || '/'
    const timeout = { enter: 300, exit: 300 }
    const action = history.action;
    //console.log(action);
    let transitionName = '';
    // REPLEASE
    if (action === 'PUSH') {
        transitionName = 'page-push';
    } else if (action === 'POP') {
        transitionName = 'page-pop';
    }
    return (
        <div className={transitionName}>
            <TransitionGroup component="main" className="page-main">
                <CSSTransition key={currentKey} timeout={timeout} classNames='page-switch' appear>
                    <section>
                        <Switch location={location}>
                            <Route exact path="/" component={App1} />
                            <Route exact path="/inputText" component={App2} />
                            <Route exact path="/detail" component={App3} />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
})
function App1({},context) {
    return <div>
        <div onClick={()=>{context.router.history.push('detail')}}>app2</div>
        11111111111111111111111
        </div>
}
App1.contextTypes = {
    router: PropTypes.object
};
function App2() {
    return <div>2222222222222222222222</div>
}
function App3() {
    return <div>333333333333333333333</div>
}