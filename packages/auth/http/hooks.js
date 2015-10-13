/*
 * @package	Auth
 * @module	Http/Hooks
 */
module.exports = [
	
	{
		'type' : 'preroute',
		'callback': function(route, request, response) {

			if(parseInt(getConfig('auth', 'enable')) == 1) {

				if(!route.meta.noauth) {

					var decoded = ada.services.jwt.verify(request.authorization.credentials);

					if(decoded === false) {
						response.send(new ada.restify.NotAuthorizedError("Access token is invalid."));
						return false;
					}
					else {
						request.user = decoded;
			      		return true;
					}

				}
				else {

					return true;
				
				}

			}
			else {

				return true;
			
			}

		}

	}

];