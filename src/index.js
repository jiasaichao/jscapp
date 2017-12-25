import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './router';
window.onresize = function () {
    document.querySelector("html").setAttribute("style", "font-size:" + document.body.clientWidth / 7.5 + "px");
};
document.querySelector("html").setAttribute("style", "font-size:" + document.body.clientWidth / 7.5 + "px");
ReactDOM.render(<Router />, document.getElementById('app'));