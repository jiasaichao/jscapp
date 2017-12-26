import { renderToString } from 'react-dom/server';
import {Text} from '../src/demo/test';
const fs = require("fs");
const path = require('path');
fs.writeFile(path.resolve(__dirname, '../build/index11.html'),renderToString(Text),function(){});