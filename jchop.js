/** Immediately-Invoked Function Expression **/
+function() {
	'use strict';

	/** If you really are in love with Javascript.
		Then don't use this. **/

	/** Make some alias variables **/
	var object = Object,
		string = String,
		number = Number,
		array = Array;

	/** Used for variable extensions **/
	function ext(obj, name, sig) {
		object.defineProperty(obj.prototype, name, {
			enumerable: false,
			value: sig
		});
	}

	/**
	  * Capitalize given string
	  * @function cap
	  * @example "hello".cap()
	  */
	ext(string, 'cap', function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	});

	/**
	  * Reverse given string
	  * @function rev
	  * @example "elloh".rev()
	  */
	ext(string, 'rev', function() {
		return this.split("").reverse().join("");
	});

	/**
	  * Insert a string into given string
	  * @function ins
	  * @example "hllo".ins(1, "e")
	  */
	ext(string, 'ins', function(i, str) {
		return this.substring(0, i) + str + this.substring(i, this.length);
	});

	/**
	  * Return if a string contains a given (sub)string
	  * @function contains
	  * @example "hello".contains("el")
	  */
	ext(string, 'contains', function(s) {
		return this.indexOf(s) !== -1;
	});

	/**
	  * Return if a string ends with the given (sub)string
	  * @function ends
	  * @example "hello".end("lo")
	  */
	ext(string, 'ends', function(s) {
		return this.indexOf(s, this.length - s.length) !== -1;
	});

	/** Thanks to SO **/
	/**
	  * Format the provided string.
	  * @function format
	  * @example "Hello {0}, I like {1}".format("visitor", "javascript")
	  * @example "Hello {who}, I like {language}".format("visitor", "javascript")
	  */
	ext(string, 'format', function() {
		var s = this.toString();
		if (!arguments.length) {
		    return s;
		}

		var args = typeof arguments[0],
		    args = (("string" == args || "number" == args) ? arguments : arguments[0]);
		    
		for (var a in args) {
		    s = s.replace("{" + a + "}", args[a]);
		}
		return s;
	});

	/**
	  * Return if a array contains a given value
	  * @function contains
	  * @example ["h", "e", "l", "l", "o"].contains("h")
	  */
	ext(array, 'contains', function(i) {
		return this.indexOf(i) !== -1;
	});

	/**
	  * Clone a array
	  * @function clone
	  * @example x = ["h", "e", "l", "l", "o"].clone()
	  */
	ext(array, 'clone', function() {
		return this.slice();
	});

	/**
	  * Not A Number
	  * @function nan
	  * @example 0.0.nan();
	  */
	ext(number, 'nan', function() {
		return +this !== +this;
	});
}();