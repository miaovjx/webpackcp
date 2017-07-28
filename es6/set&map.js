	// var s = new Set();
	// [2,3,4,5,5,2,2].map(x => s.add(x));
	// for(var i of s ){
	// 	console.log(i);// 2,3,4,5
	// }
//去除数组中重复元素
  // 	function dedupe (array) {
		// return Array.from(new Set(array));
  // 	}
  // 	var array = new Array(1,2,3,3,4,2,1);
  // 	console.log(dedupe(array));//[1,2,3,4]
import jquery from './jquery-1.7.2.min.js';   
import './lottery/base.js';
import './lottery/timer.js';
import './lottery/calculate.js';
import './lottery/interface.js';
//alert($(window).width());       
{
  function test(x, y = 'world'){
    console.log('默认值',x,y);
  }
  test('hello');
  test('hello','kill');
}
