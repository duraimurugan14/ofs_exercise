//feeds.js


"use strict";

//Create feed object
var feeds = [], feedType = "";
var feed = { _uId:undefined, _feedType:undefined, _timeStamp:undefined};
function Feed(id, type, time) {
	this._uId = id;
	this._feedType = type;
	this._timeStamp = time;
}
Feed.protype = {
	getId: function() { return this._uId;},
	getType: function() { return this._feedType;}
};



function validateFeedEntry(feedData){
	if(feedData.length > 0){
		var posHTTP = feedData.indexOf("http");
		if (posHTTP === -1) {
			feedType = "text";
		}
		else{
			feedType = "url";
		}
		return feedType;
	}
	else{
		alert("Invalid Data. Please check and re-enter");
		return;
	}
}

function createFeeds(feedsText) { 
  var count = 0, FeedObject = undefined;
  var feedTextInfo = feedsText.value;
  validateFeedEntry(feedTextInfo);
  var timeStamp = new Date();
  var feed = new Feed(count, feedType, timeStamp);
  FeedObject = Object.create(feed);
  FeedObject.content = feedTextInfo;
  postFeed(FeedObject);
  //loadFeeds(feedData);
}


function postFeed(feed){
	feeds = feeds || [];
	feeds.push(feed);
	document.getElementById("feedText").value = ""; 
	displayFeeds();
}

function getFeeds() {
	feeds = feeds || [];
}

function deleteFeed(id) {
	feeds.splice(id, 1);
	displayFeeds();
}


function displayFeeds() {
	
	var listStr = "";
	if(feeds.length == 0) {
		document.getElementById("feedList").innerHTML = "";
		return;
	}
	for (var i = 0; i < feeds.length; i++) {
			var currentFeed = feeds[i];
			var listStartTag = "<li>";
			if (currentFeed._feedType == "text") {
				var divStartTag = "<div id=\"textitem\">";
			} else {
				var divStartTag = "<div id=\"urlitem\">";
			}
			var userImageTag = "<img src=\"assets\/user_icon.jpeg\" id=\"userImage\" align=\"center\">";
			var feedValuesTag = "";
			if (currentFeed._feedType == "text") {
				feedValuesTag = "<label id=\"feedValues\">"+currentFeed.content+"</label>";
			} else {
				feedValuesTag = "<label id=\"feedValues\" onClick=\"navigateTo( "+i+" )\">"+currentFeed.content+"</label>"; 
			}
			var closeBtmTag = "<img src=\"assets\/remove_icon.jpeg\" id=\"closeBtn\" onClick=\" deleteFeed("+ i +")\">";		
			var timeTag = "<label id=\"feedTime\">"+"10/21/2014 12:30 pm"+"</label>";
			var divEndTag = "</div>";
			var listEndTag = "</li>";
			var listItem = listStartTag + divStartTag + userImageTag + feedValuesTag + closeBtmTag + timeTag + divEndTag + listEndTag;
			listStr += listItem;
	
			document.getElementById("feedList").innerHTML = listStr;
	} 
}





// function service(currentUser,type){
// 	var feeds = currentUser.feeds;
// 	var profile =currentUser.profile;
// 	var ret;
	
// 	if(type === "CreateFeed"){	
// 		ret =  function(feed){
// 			feeds.push(feed);			
// 			reloadFeeds();
// 		};
// 	} else if (type === "DeleteFeed"){
// 			ret =  function(id){
// 			feeds.splice(id,1);	
// 			var myNode = document.getElementById("loadFeeds");
// 			while (myNode.firstChild) {
// 				myNode.removeChild(myNode.firstChild);
// 			}			
// 			reloadFeeds();
// 		};
// 	} else {
// 		ret = function(name,age,phone,email,address){
// 			profile.saveProfile(name,age,phone,email);
// 		};
// 	}
// 	return ret;
// }