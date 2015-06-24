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
  	
  	$("body").on("click",".arrow",function(){
  		console.log($(this));
   		$(this).toggleClass("active");
   		$(this).parent(".box-heading").siblings(".hindi-content").slideToggle( "fast");
	});
	$.getJSON( "json2.json", function( data ) {
  		clearMainDiv();
  		data.reverse();
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

			var languageDiv = document.createElement('div');
			languageDiv.setAttribute('class','box-heading');

			var arrow = document.createElement('a');
			arrow.setAttribute('class','arrow');
			arrow.setAttribute('href','javascript:void(0)');
			arrow.innerHTML="<span></span><span style='color:green'>Hindi</span>";
			languageDiv.appendChild(arrow);	


				
			/*var category_title = document.createElement('span');
			category_title.setAttribute('class','category_title');
			category_title.innerHTML += "Category:";

			var category = document.createElement('span');
			category.setAttribute('class','category');
			category.innerHTML += y[i].category;*/

			var writer_title = document.createElement('span');
			writer_title.setAttribute('class','writer_title');
			writer_title.innerHTML += "Writer:";

			var writer = document.createElement('span');
			writer.setAttribute('class','category');
			writer.innerHTML += y[i].writer;

			
			var hindi_content = document.createElement('div');
			hindi_content.setAttribute('class','hindi-content');
			hindi_content.innerHTML += y[i].hindi;
			
			newdiv.appendChild(newsection_div);
			newdiv.appendChild(languageDiv);
			newdiv.appendChild(writer_title);
			newdiv.appendChild(writer);
			newdiv.appendChild(hindi_content);
			divs.appendChild(newdiv);
		}
	};
	
});









