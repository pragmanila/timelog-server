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

				self.response.send({'status':'okay'});

				var employee = loadModel(['eis', 'employee']);
				var logid = doc.id;

				employee.id(self.request.params.employee_code, function(result, err) {
					
					if(isEmpty(err)) {

						// Upload image to dropbox
						var dataurl = self.request.params.image;
						var http = require("https");

						var options = {
						  "method": "POST",
						  "hostname": "api.dropboxapi.com",
						  "port": null,
						  "path": "/1/save_url/auto/public/"+logid+".jpg",
						  "headers": {
						    "content-type": "multipart/form-data; boundary=---011000010111000001101001",
						    "authorization": "Bearer xvHOjKAysJIAAAAAAAAUhtLyaOSfJUGmOKRE6oJHudRqSBFl37uheQRgg0MAU3Od",
						    "cache-control": "no-cache"
						  }
						};

						console.log("Uploading to dropbox");
						var req = http.request(options, function (res) {
						  var chunks = [];
						  res.on("data", function (chunk) {
						    chunks.push(chunk);
						  });
						  res.on("end", function () {
						    
						    var body = Buffer.concat(chunks);
						    
						    // share image
							var options = {
							  "method": "GET",
							  "hostname": "api.dropboxapi.com",
							  "port": null,
							  "path": "/1/media/auto/public/"+logid+".jpg",
							  "headers": {
							    "authorization": "Bearer xvHOjKAysJIAAAAAAAAUhtLyaOSfJUGmOKRE6oJHudRqSBFl37uheQRgg0MAU3Od",
							    "cache-control": "no-cache"
							  }
							};

							console.log("Sharing image from dropbox");
							var req = http.request(options, function (res) {
							  var chunks = [];
							  res.on("data", function (chunk) {
							    chunks.push(chunk);
							  });
							  res.on("end", function () {
							    var body = Buffer.concat(chunks);
							    eval("var result = " + body.toString() + ";");
							    
							    // Update log entry with remote image url
							    var image_url = result.url;
							    var log = loadModel(['timelog', 'timelog']);
								self.model.update(logid, {'image':image_url}, function(result, err) {});

								// Notify slack
								var name = result.first_name + ' ' + result.last_name;
								var options = {
								  "method": "POST",
								  "hostname": "hooks.slack.com",
								  "port": null,
								  "path": "/services/T029QBNV9/B0JTW9H7S/DHGsba5kmeALbieTUclBOgUE",
								  "headers": {
								    "content-type": "application/json",
								    "cache-control": "no-cache",
								  }
								};

								var req = http.request(options, function (res) {
								  var chunks = [];

								  res.on("data", function (chunk) {
								    chunks.push(chunk);
								  });

								  res.on("end", function () {
								    var body = Buffer.concat(chunks);
								  });

								});

								req.write(JSON.stringify({
									username: name, 
									text: 'Logging my time...',
									"attachments": [
								        {
								            "image_url": image_url
								        }
								    ]
								}));
								req.end();

							  });
							});
							
							req.end();

						  });
						});

						req.write("-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"url\"\r\n\r\n"+dataurl+"\r\n-----011000010111000001101001--");
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