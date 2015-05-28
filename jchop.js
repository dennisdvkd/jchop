/** Immediately-Invoked Function Expression **/
+function() {
	'use strict';

	/** If you really are in love with Javascript.
		Then don't use this. **/

	/** Make same alias variables **/
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
		return this.charAt(0).toUppercase() + this.slice(1);
	});
}