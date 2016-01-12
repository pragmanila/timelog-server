/*
 * Timelog model definition
 * Auto-generated on January 12th 2016, 2:31:17 pm
 */

var Model = extend('model');

function Timelog() {

	var self = this;

	Model.call(this);

	self.collectionURI = 'timelogs';
	self.documentURI = 'timelog'; 

	self.collectionName = 'timelog';

	/** Schema information **/
	self.schema = [
		{
			'key': 'employee_code',
			'constraints': {
				'presence': true
			},
			'meta': {
				'label': 'Employee_code',
				'desc': 'Employee Code'
			}
		},
		{
			'key': 'image',
			'constraints': {
				'presence': true
			},
			'meta': {
				'label': 'Image',
				'desc': 'Image'
			}
		}
	];

	/** Set identifier key (primary) **/
	// self.identifier = 'key';

	/** Embeddable collections **/
	
	self.embed = {
		'collection' : {
			'model'	: ['eis', 'employee'],
			'key'	: 'employee_code'
		}
	};
	

	/** Indexing information **/
	
	self.indeces = {
		'employee_code_foreign' : {
			'fields' 	: {
				'employee_code' : 1
			},
			'options'	: {
				'sparse': true
			}
		}
		// 'key_unique' : {
		// 	'fields' 	: {
		// 		'key'	: 1
		// 	},
		// 	'options'	: {
		// 		'unique': true,
		// 		'sparse': true
		// 	}
		// }
	};
	

}

Timelog.prototype = Object.create(Model.prototype);
Timelog.prototype.constructor = Model;

module.exports = Timelog;