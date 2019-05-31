import "./test/index.css";
import one from './test/one.js'
import Vue from 'vue';

Vue.prototype.aaaa = 1111;

import $ from 'jquery';

let main = () => {
    console.log(1111)
    one()
}
$.ajax()

main()

class test{
    play(){
        console.log(22222)
    }
}

let a= 1;
console.log(a)
var b = 11000;
console.log(b)
