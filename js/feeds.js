//feeds.js

"use strict";

//creates feed object
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


//checks the type of the feed entered by the user
function validateFeedEntry(feedData){
	if(feedData.length > 0){
		if(validUrl(feedData)){
			feedType = "url";
		}else{
			feedType = "text";
		}
		return feedType;
	}
	else{
		alert("Invalid Data. Please check and re-enter");
		return;
	}
}


//validates the URL using Regex
function validUrl(str) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
	'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
	'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	if(!pattern.test(str)) {
		return false;
	} else {
		return true;
	}
}


//formats the current time to desired format
function formatAMPM(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0'+minutes : minutes;
	var formattedAMPM = hours + ':' + minutes + ' ' + ampm;
	return formattedAMPM;
}


// creates feed objects and calls postFeed() method
function createFeeds(feedsText) { 
  	var count = 0, FeedObject = undefined;
 	var feedTextInfo = feedsText.value;
  	validateFeedEntry(feedTextInfo);
	var currentTime = new Date();
	var year = currentTime.getFullYear();
	var month = currentTime.getMonth() + 1;
	var date = currentTime.getDate();
	var time = formatAMPM(currentTime);
	var timeStamp = month+"/"+date+"/"+year+" "+time;
	var feed = new Feed(count, feedType, timeStamp);
  	FeedObject = Object.create(feed);
  	if (feedTextInfo == ""){
  		return false
  	}
  	else{
		FeedObject.content = feedTextInfo;
		postFeed(FeedObject);
  	}
}


// pushes the feed object into the array
function postFeed(feed){
	feeds = feeds || [];
	feeds.push(feed);
	document.getElementById("feedsText").value = ""; 
	loadFeedData();
}


function getFeeds() {
	feeds = feeds || [];
}


//deletes the feed based on the feed id (user selection)
function deleteFeed(id) {
	feeds.splice(id, 1);
	loadFeedData();
}


//opens the url feed in a new tab in the browser
function openFeedInBrowser(i) {
	var UrlFeed = feeds[i];
	window.open(UrlFeed.content);
}


//loads the feed data for the user to view
function loadFeedData() {
	var listStr = "";
	if(feeds.length == 0) {
		document.getElementById("feedList").innerHTML = "";
		return;
	}
	for (var i = 0; i < feeds.length; i++) {
			var currentFeed = feeds[i];
			var listStartTag = "<br><li>";
			if (currentFeed._feedType == "text") {
				var divStartTag = "<div class =\"padding\" id=\"textFeedItem\">";
			} else {
				var divStartTag = "<div class=\"padding\" id=\"urlFeedItem\">";
			}
			var userImageTag = "<img src=\"assets\/user_icon.jpeg\" id=\"userImage\" align=\"center\">";
			var feedValuesTag = "";
			if (currentFeed._feedType == "text") {
				feedValuesTag = "<label id=\"feedValues\">"+currentFeed.content+"</label>";
			} else {
				feedValuesTag = "<label id=\"feedValuesURL\" onClick=\"openFeedInBrowser( "+i+" )\">"+currentFeed.content+"</label>"; 
			}
			var closeBtmTag = "<img src=\"assets\/remove_icon.jpeg\" id=\"closeBtn\" align=\"right\" onClick=\" deleteFeed("+ i +")\">";		
			var timeTag = "<label id=\"feedTime\">"+currentFeed._timeStamp+"</label>";
			var divEndTag = "</div>";
			var listEndTag = "</li>";
			var listItem = listStartTag + divStartTag + userImageTag + feedValuesTag +  timeTag + closeBtmTag + divEndTag + listEndTag;
			listStr += listItem;
			document.getElementById("feedList").innerHTML = listStr;
	} 
}





