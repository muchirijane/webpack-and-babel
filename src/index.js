console.log('Index file');


import {bodyStyle, title, contact} from  './dom';
import users, {getOver18} from './data';

const over18 = getOver18(users);

console.log(users, over18);
console.log('test 2');
