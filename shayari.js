"use strict";
var obj=[];

$(document).ready(function () {
	(function(){
    var imgDiv = document.getElementById("imgDiv");

    var show = function(){
      imgDiv.style.display = "block";
      setTimeout(hide, 2000);  // 2 seconds
    }

    var hide = function(){
      imgDiv.style.display = "none";
    }

    show();
  })();
  
	$.getJSON( "json2.json", function( data ) {
  		clearMainDiv();
      	print(data);
  	});
 
	

	var clearMainDiv = function(){
	var divs=document.getElementById("maindiv");
	var children = divs.childNodes;
    var len = children.length;
	while(len--) {
         divs.removeChild(children[len]);    
	}
	};

	var print=function(y){
	var divs=document.getElementById("maindiv");
	for(var i=0; i < y.length;i++)
	{
		var newdiv = document.createElement('section');
		var sectionIdName = 'my'+i+'Section';
		newdiv.setAttribute('id',sectionIdName);
		newdiv.setAttribute('class','innerDiv');						
		
		var newsection_div = document.createElement('div');
		newsection_div.setAttribute('class','description');
		newsection_div.innerHTML += y[i].english;

		var category_title = document.createElement('span');
		category_title.setAttribute('class','category_title');
		category_title.innerHTML += "Category:";

		var category = document.createElement('span');
		category.setAttribute('class','category');
		category.innerHTML += y[i].category;

		var writer_title = document.createElement('span');
		writer_title.setAttribute('class','writer_title');
		writer_title.innerHTML += "Writer:";

		var writer = document.createElement('span');
		writer.setAttribute('class','category');
		writer.innerHTML += y[i].writer;

		newdiv.appendChild(newsection_div);
		newdiv.appendChild(category_title);
		newdiv.appendChild(category);
		newdiv.appendChild(writer_title);
		newdiv.appendChild(writer);
		divs.appendChild(newdiv);
	}
	
	};

});









