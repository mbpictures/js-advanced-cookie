var cookie = (function () {
	"use strict";
	/* private stuff */
	function getCookie(name) {
	  	var value = "; " + document.cookie;
	  	var parts = value.split("; " + name + "=");
	  	if (parts.length === 2){ return parts.pop().split(";").shift(); }
		return undefined;
	}
	/* public API */
	return {
		/* get cookie with specific name. available options: json=true/false, key=key to read */
		get: function (name, options = undefined){
			var cookie = this.getCookie(name);
			if(options !== undefined) {
				if(options.json){
					cookie = JSON.parse(cookie);
				}
				if(options.key !== undefined) {
					cookie = cookie[options.key];
				}
			}
			else{
				//try to auto parse json
				try{
					cookie = JSON.parse(cookie);
				} catch(e){ }
			}
			return cookie;
		},
		add: function(name, value, options = undefined){
			//stringify if value is json or array
			value = (value.constructor === [].constructor || value.constructor === {}.constructor) ? JSON.stringify(value) : value;
			var string = name + "=" + value;
			if(options !== undefined){
				if(options.expire !== undefined) {
					var t = new Date();
					t.setSeconds(t.getSeconds() + options.expire);
					string += "; expires=" + t.toUTCString();
				}
				if(options.path !== undefined) {
					string += "; path=" + options.path;
				}
			}
			if(getCookie(name) === undefined || (getCookie(name) !== undefined && options.override !== undefined && options.override === true)){
				document.cookie = string;
				return true;
			}
			return false;
		},
		remove: function(name) {
			if(getCookie(name) !== undefined){
				document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
				return true;
			}
			return false;
		}
  	};

})();