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

	function ext(obj, name, sig) {
		object.defineProperty(obj.prototype, name, {
			enumerable: false,
			value: sig
		});
	}

	ext(string, 'cap', function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	});

	ext(string, 'rev', function() {
		return this.split("").reverse().join("");
	});

	ext(string, 'ins', function(i, str) {
		return this.substring(0, i) + str + this.substring(i, this.length);
	});

	ext(string, 'contains', function(s) {
		return this.indexOf(s) !== -1;
	});

	ext(string, 'ends', function(s) {
		return this.indexOf(s, this.length - s.length) !== -1;
	});

	/** Thanks to SO **/
	/**
	  * Format the provided string.
	  * @function format
	  * @example "Hello {0}, I like {1}".format("visitor", "javascript")
	  * @example "Hello {who}, I like {language}".format("visitor", "javascript")
	  *
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

	ext(array, 'contains', function(i) {
		return this.indexOf(i) !== -1;
	});

	ext(array, 'clone', function() {
		return this.slice();
	});

	ext(number, 'nan', function() {
		return +this !== +this;
	});
}();