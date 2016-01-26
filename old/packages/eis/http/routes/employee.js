/*
 * Employee route definition
 * Auto-generated on January 12th 2016, 1:25:16 pm
 */

module.exports = [

	{

		'route'  	: '/employees',
		'method' 	: 'get',

		'response'	: {
			'type'	: 'collection'
		},
		
		'binding'	: {
			'model'	: ['eis', 'employee']
		},

		'meta'		: {
			'desc'	: 'Retrieve employee collection',
			'live'	: true,
			'noauth': true	
		}

	},

	{

		'route'		: '/employee/:id',
		'method'	: 'get',

		'response'	: {
			'type'	: 'document'
		},

		'binding'	: {
			'model'	: ['eis', 'employee']
		},

		'meta'		: {
			'desc'	: 'Retrieve employee document by its ID',	
			'live'	: true,
			'noauth': true
		}

	},

	{

		'route'		: '/employee',
		'method'	: 'post',

		'response'	: {
			'type'	: 'controller',
		},
		
		'binding'	: {
			'action'	 : 'create',
			'model'		 : ['eis', 'employee']
		},

		'meta'		: {
			'desc'	: 'Create employee document',
			'live'	: true,
			'noauth': true	
		}

	},

	{

		'route'		: '/employee/:id',
		'method'	: 'put',

		'response'	: {
			'type'	: 'controller',
		},
		
		'binding'	: {
			'action'	 : 'update',
			'model'		 : ['eis', 'employee']
		},

		'meta'		: {
			'desc'	: 'Update employee document by its ID',
			'live'	: true,
			'noauth': true
		}

	},

	{

		'route'		: '/employee/:id',
		'method'	: 'delete',

		'response'	: {
			'type'	: 'controller',
		},
		
		'binding'	: {
			'action'	 : 'delete',
			'model'		 : ['eis', 'employee']
		},

		'meta'		: {
			'desc'	: 'Delete employee document by its ID',
			'live'	: true,
			'noauth': true
		}

	}

];