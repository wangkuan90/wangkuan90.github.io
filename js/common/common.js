/*! wangkuan - 2015-11-04 14:09:21 */
define(function(require,exports,module){"use strict";var $=require("jquery");return{ajax:function(url,options){var params={url:url,cache:!1,type:"get",dataType:"json",contentType:"application/json",beforeSend:function(XMLHttpRequest){XMLHttpRequest.setRequestHeader("accept","application/json"),XMLHttpRequest.setRequestHeader("content-type","application/json")}};options=$.extend(params,options);var defer=$.Deferred();return $.ajax(options).done(function(res){}).fail(function(res){console.log("something error")}),defer.promise()},getHtml:function(url){url="html/"+url+".html";var params={url:url,cache:!1,type:"get",dataType:"html"},defer=$.Deferred();return $.ajax(params).done(function(res){defer.resolve(res)}).fail(function(res){console.log("something error"),defer.reject()}),defer.promise()},get:function(url,options,other){for(var i in options)url+="&"+i+"="+options[i];var options={url:url,type:"GET",dataType:"script"};options=$.extend({},options,other),$.ajax(options)},getUrl:function(startStr,endStr,isContainer,targetStr){if(startStr=startStr||"#",endStr=endStr||"?",targetStr=targetStr||location.href,!targetStr.contain(startStr))return"";var url=(isContainer?startStr:"")+targetStr.split(startStr)[1];return url.contain(endStr)?url.split(endStr)[0]:url+(isContainer?endStr:"")},getParams:function(url,options,other){for(var i in options)url+="&"+i+"="+options[i];var options={url:url,type:"GET",dataType:"script"};options=$.extend({},options,other),$.ajax(options)}}});