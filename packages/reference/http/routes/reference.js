/*
 * @package	Reference
 * @module	Http/Routes
 */

module.exports =  [
	{
		
		'route'  	: '/',
		'method' 	: 'get',

		'response'	: {
			'type'	: 'controller',
		},
		
		'binding'	: {
			'controller' : 'reference',
			'action'	 : 'reference'
		},

		'meta'		: {
			'live'	: true,
			'noauth': true	
		}

	},
	{
		
		'route'  	: '/browser',
		'method' 	: 'get',

		'response'	: {
			'type'	: 'controller',
		},
		
		'binding'	: {
			'controller' : 'reference',
			'action'	 : 'browser'
		},

		'meta'		: {
			'live'	: true,
			'noauth': true	
		}

	}
];