module.exports = [

	{

		'route'		: '/logs',
		'method'	: 'get',

		'response'	: {
			'type'	: 'collection',
		},
		
		'binding'	: {
			'model'		 : ['timelog', 'timelog']
		},

		'meta'		: {
			'desc'	: 'Get logs',
			'live'	: true,
			'noauth': true,	
		}

	},

	{

		'route'		: '/employee/log',
		'method'	: 'post',

		'response'	: {
			'type'	: 'controller',
		},
		
		'binding'	: {
			'action'	 : 'create',
			'model'		 : ['timelog', 'timelog']
		},

		'meta'		: {
			'desc'	: 'Log employee',
			'live'	: true,
			'noauth': true,	
		}

	},
	

];