import $ from 'jquery';
import v from './two'

console.log($)

v.data.a = 111;

function fun(){
    return {
        query:$
    }
}

export default fun