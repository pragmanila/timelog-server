/*
 * Employee model definition
 * Auto-generated on January 12th 2016, 1:25:16 pm
 */

var Model = extend('model');

function Employee() {

	var self = this;

	Model.call(this);

	self.collectionURI = 'employees';
	self.documentURI = 'employee'; 

	self.collectionName = 'employee';

	/** Schema information **/
	self.schema = [
		{
			'key': 'employee_code',
			'constraints': {
				'presence': true
			},
			'meta': {
				'label': 'Employee Code',
				'desc': 'Employee Code'
			}
		},
		{
			'key': 'first_name',
			'constraints': {
				'presence': true
			},
			'meta': {
				'label': 'First Name',
				'desc': 'First Name'
			}
		},
		{
			'key': 'last_name',
			'constraints': {
				'presence': true
			},
			'meta': {
				'label': 'Last Name',
				'desc': 'Last Name'
			}
		},
		{
			'key': 'designation',
			'constraints': {
				'presence': true
			},
			'meta': {
				'label': 'Designation',
				'desc': 'Designation'
			}
		}
	];

	/** Set identifier key (primary) **/
	self.identifier = 'employee_code';

	/** Embeddable collections **/
	/*
	self.embed = {
		'collection' : {
			'model'	: 'model',
			'key'	: 'local_id'
		}
	};
	*/

	/** Indexing information **/
	
	self.indeces = {
		// 'local_id_foreign' : {
		// 	'fields' 	: {
		// 		'local_id' : 1
		// 	},
		// 	'options'	: {
		// 		'sparse': true
		// 	}
		// },
		'employee_code_unique' : {
			'fields' 	: {
				'employee_code'	: 1
			},
			'options'	: {
				'unique': true,
				'sparse': true
			}
		}
	};
	

}

Employee.prototype = Object.create(Model.prototype);
Employee.prototype.constructor = Model;

module.exports = Employee;