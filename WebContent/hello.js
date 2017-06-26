var i= 10;

var test = function(){

	document.write( "<h2>Hello World</h2>" ); 
	document.write( "<h2>Hello World</h2>" ); 
	document.write( "<h2>Hello World</h2>" ); 
	document.write( "<h2>Hello World</h2>" ); 

}

setTimeout( function(){ /* test를 사용할수도 있으나 한번쓰는 경우는 일반적으로 그냥 넣어서 씀  */

	document.write( "<h2>Hello World</h2>" ); 
	document.write( "<h2>Hello World</h2>" ); 
	document.write( "<h2>Hello World</h2>" ); 
	document.write( "<h2>Hello World</h2>" ); 

}, 2000);