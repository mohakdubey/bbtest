var articlelist=new Array();
function toijson(elem) {
  $('#titlelist').empty();
  $('#titlelist').append('<li>Please Wait...</li>');
		var id = $(elem).attr("id");
       $.getJSON("http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent("SELECT * FROM feed WHERE url='http://fulltextrssfeed.com/timesofindia.feedsportal.com/c/33039/f/5339"+id+"/index.rss'")+"&format=json",
          function(data) {
          		console.log(data);
              var id = data.query.results.item;
              console.log(id);
              $('#titlelist').empty();
              
              for(var i=0; i<6; i++) {
             articlelist[i]=data.query.results.item[i].description;
              console.log(data.query.results.item[i].title);
  
              $('#titlelist').append('<li><a href="index.html#desc" onclick="toiarticles(this)" id='+i+'>'+data.query.results.item[i].title+'</li></a>');
              $('#titlelist').listview('refresh');
          }
          }
);
}
function toiarticles(article) {
var fp= $(article).attr("id");
var fullpost=articlelist[fp];
$('#fullpost').empty();
$('#fullpost').append(fullpost);
}

//-----------------------------------------------------toi-----------------------------------------------------------------------------

function cnnibnjson(elem) { 
    $('#titlelist').empty();
  $('#titlelist').append('<li>Please Wait...</li>');
		var query;
		var id = $(elem).attr("id");
		if(id=="top") {
			query="http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent("SELECT * FROM feed WHERE url='http://fulltextrssfeed.com/ibnlive.in.com.feedsportal.com/c/33219/fe.ed/ibnlive.in.com/ibnrss/"+id+".xml'")+"&format=json";
			console.log(query);
		}
		else 
			query="http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent("SELECT * FROM feed WHERE url='http://fulltextrssfeed.com/ibnlive.in.com.feedsportal.com/c/33219/fe.ed/ibnlive.in.com/ibnrss/rss/"+id+"/"+id+".xml'")+"&format=json";

       $.getJSON(query,
          function(data) {
          		console.log(data);
              var cid = data.query.results.item;
              console.log(cid);
              $('#titlelist').empty();
              
              for(var i=0; i<6; i++) {
             articlelist[i]=data.query.results.item[i].description;
              console.log(data.query.results.item[i].title);
              $('#titlelist').append('<li><a href="index.html#desc" onclick="toiarticles(this)" id='+i+'>'+data.query.results.item[i].title+'</li></a>');
              $('#titlelist').listview('refresh');
          }
          }
);
}

//-----------------------------------------------------cnn-ibn-----------------------------------------------------------------------------

function ndtvjson(elem) { 
    $('#titlelist').empty();
  $('#titlelist').append('<li>Please Wait...</li>');
		var query;
		var id = $(elem).attr("id");
		if(id=="NdtvNews-TopStories") {
			query="http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent("SELECT * FROM feed WHERE url='http://fulltextrssfeed.com/feeds.feedburner.com/"+id+"'")+"&format=json";
			console.log(query);
		}
		else if(id=="Lsgd" || id=="TqgX") {
			query="http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent("SELECT * FROM feed WHERE url='http://fulltextrssfeed.com/feeds.feedburner.com/ndtv/"+id+"'")+"&format=json";
		}
		else 
			query="http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent("SELECT * FROM feed WHERE url='http://fulltextrssfeed.com/feeds.feedburner.com/NDTV-"+id+"'")+"&format=json";


       $.getJSON(query,
          function(data) {
          		console.log(data);
              var cid = data.query.results.item;
              console.log(cid);
              $('#titlelist').empty();
              
              for(var i=0; i<6; i++) {
             articlelist[i]=data.query.results.item[i].description;
              console.log(data.query.results.item[i].title);
              $('#titlelist').append('<li><a href="index.html#desc" onclick="toiarticles(this)" id='+i+'>'+data.query.results.item[i].title+'</li></a>');
              $('#titlelist').listview('refresh');
          }
          }
);
}


//-----------------------------------------------------ndtv-----------------------------------------------------------------------------

function hindujson(elem) { 
    $('#titlelist').empty();
  $('#titlelist').append('<li>Please Wait...</li>');
		var query;
		var id = $(elem).attr("id");

			query="http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent("SELECT * FROM feed WHERE url='http://fulltextrssfeed.com/http://feeds.hindustantimes.com/"+id+"'")+"&format=json";
			console.log(query);


       $.getJSON(query,
          function(data) {
          		console.log(data);
              var cid = data.query.results.item;
              console.log(cid);
              $('#titlelist').empty();
              
              for(var i=0; i<6; i++) {
             articlelist[i]=data.query.results.item[i].description;
              console.log(data.query.results.item[i].title);
              $('#titlelist').append('<li><a href="index.html#desc" onclick="toiarticles(this)" id='+i+'>'+data.query.results.item[i].title+'</li></a>');
              $('#titlelist').listview('refresh');
          }
          }
);
}


//-----------------------------------------------------hindustan times-----------------------------------------------------------------------------

function dnajson(elem) { 
    $('#titlelist').empty();
  $('#titlelist').append('<li>Please Wait...</li>');
		var query;
		var id = $(elem).attr("id");

			query="http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent("SELECT * FROM feed WHERE url='http://fulltextrssfeed.com/www.dnaindia.com/syndication/"+id+".xml'")+"&format=json";
			console.log(query);


       $.getJSON(query,
          function(data) {
          		console.log(data);
              var cid = data.query.results.item;
              console.log(cid);
              $('#titlelist').empty();
              
              for(var i=0; i<6; i++) {
             articlelist[i]=data.query.results.item[i].description;
              console.log(data.query.results.item[i].title);
              $('#titlelist').append('<li><a href="index.html#desc" onclick="toiarticles(this)" id='+i+'>'+data.query.results.item[i].title+'</li></a>');
              $('#titlelist').listview('refresh');
          }
          }
);
}


//-----------------------------------------------------dna-----------------------------------------------------------------------------

function dcjson(elem) { 
    $('#titlelist').empty();
  $('#titlelist').append('<li>Please Wait...</li>');
		var query;
		var id = $(elem).attr("id");

			query="http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent("SELECT * FROM feed WHERE url='http://fulltextrssfeed.com/http://beta.deccanchronicle.com/rss/"+id+"/rss.xml'")+"&format=json";
			console.log(query);


       $.getJSON(query,
          function(data) {
          		console.log(data);
              var cid = data.query.results.item;
              console.log(cid);
              $('#titlelist').empty();
              
              for(var i=0; i<6; i++) {
             articlelist[i]=data.query.results.item[i].description;
              console.log(data.query.results.item[i].title);
              $('#titlelist').append('<li><a href="index.html#desc" onclick="toiarticles(this)" id='+i+'>'+data.query.results.item[i].title+'</li></a>');
              $('#titlelist').listview('refresh');
          }
          }
);
}