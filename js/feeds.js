//feeds.js


"use strict";


function validateFeedEntry(feedData){
	if(feedData.length > 0){
		var posHTTP = feedData.indexOf("http");
		if (posHTTP === -1) {
			alert("Text feed");
		}
		else{
			alert("URL feed");
		}
	}
	else{
		alert("Invalid Data. Please check and re-enter");
	}
}

function createFeeds(feedsText) { 
  alert(feedsText.value);
  var feedData = feedsText.value;
  validateFeedEntry(feedData);
  loadFeeds(feedData);
}


function loadFeeds(feedData){
	alert(feedData);
	var feeds = myBook.currentUser.feeds;	
	var element = document.getElementById("loadFeeds");	
	var div = document.createElement("div");
	var emptyRow,userIcon,userIcon1,emptyColumn,userFeed,userFeedText,userFeedDelete,userFeedDate,img,node,input,node1,index;
		for(var i=0,feedLength=feeds.length;i<feedLength;i++){				
		emptyRow = getElement("div","emptyRow");
		userIcon = getElement("div","userIcon");
		userIcon1 = getElement("div","userIcon");
		img = document.createElement("img");		
		img.setAttribute("src", myBook.currentUser.profile.profileImage);
		img.setAttribute("height", "40px");
		img.setAttribute("width", "40px");		
		userIcon1.appendChild(img);
		emptyColumn = getElement("div","emptyColumn");
		userFeed = getElement("div","userFeed");
		userFeedText = getElement("div","UserFeedText");
		userFeedDelete = getElement("div","UserFeedDelete");
		userFeedDate = getElement("div","UserFeedDate");	
		node = document.createElement("a");
		if(feeds[i].getType() === "URL"){
			node.setAttribute("href", feeds[i].getFeed());		
		}
		node.innerHTML=feeds[i].getFeed();
		userFeedText.appendChild(node);
		input = document.createElement("input");		
		input.setAttribute("type", "button");
		input.setAttribute("value", "X");
		input.setAttribute("onclick", ("deleteFeeds("+i+")"));
		userFeedDelete.appendChild(input);
		node1 = document.createTextNode(getDateString(feeds[i].time));
		userFeedDate.appendChild(node1);
		userFeed.appendChild(userFeedText);
		userFeed.appendChild(userFeedDelete);
		userFeed.appendChild(userFeedDate);
		div.appendChild(emptyRow);
		div.appendChild(userIcon);
		div.appendChild(userIcon1);
		div.appendChild(emptyColumn);
		div.appendChild(userFeed);
	}
	element.appendChild(div);

}


function service(currentUser,type){
	var feeds = currentUser.feeds;
	var profile =currentUser.profile;
	var ret;
	
	if(type === "CreateFeed"){	
		ret =  function(feed){
			feeds.push(feed);			
			reloadFeeds();
		};
	} else if (type === "DeleteFeed"){
			ret =  function(id){
			feeds.splice(id,1);	
			var myNode = document.getElementById("loadFeeds");
			while (myNode.firstChild) {
				myNode.removeChild(myNode.firstChild);
			}			
			reloadFeeds();
		};
	} else {
		ret = function(name,age,phone,email,address){
			profile.saveProfile(name,age,phone,email);
		};
	}
	return ret;
}