var Controller = extend('controller');

function Timelog(request, response) {

    var self = this;

    Controller.call(this, request, response); 

    self.createandlog = function () {
		
		self.model.create(self.request.params, function(doc, result, err){
			if(!isEmpty(err)) {
				self.response.send(err);
			}
			else {

				var employee = loadModel(['eis', 'employee']);
				
				employee.id(self.request.params.employee_code, function(result, err) {
					if(isEmpty(err)) {
						
						var name = result.first_name + ' ' + result.last_name;

						var http = require("https");
						var options = {
						  "method": "POST",
						  "hostname": "hooks.slack.com",
						  "port": null,
						  "path": "/services/T029QBNV9/B0JTW9H7S/DHGsba5kmeALbieTUclBOgUE",
						  "headers": {
						    "content-type": "application/json",
						    "cache-control": "no-cache",
						    //"postman-token": "12fd71e4-4d31-b063-f1c6-379a42b0d6ec"
						  }
						};

						var req = http.request(options, function (res) {
						  var chunks = [];

						  res.on("data", function (chunk) {
						    chunks.push(chunk);
						  });

						  res.on("end", function () {
						    var body = Buffer.concat(chunks);
						    console.log(body.toString());
						  });

						});

						req.write(JSON.stringify({ username: name, text: 'Logging my time...' }));
						req.end();
					
					}

				});

				

			}
		});

    };

}

Timelog.prototype = Object.create(Controller.prototype);
Timelog.prototype.constructor = Controller;

module.exports = Timelog;