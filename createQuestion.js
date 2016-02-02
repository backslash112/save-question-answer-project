// add jquery
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

run();

function run() {
	/*
	// create data
	var data = JSON.stringify({
		"question_text": "This is a question from js code.",
		"answer": 1
	});
	// post
	$.ajax({
		url: 'http://localhost:8000/api/question/',
		type: 'POST',
		contentType: 'application/json',
		data: data,
		dataType: 'json',
		processData: false
	});
	*/
	var url = "http://localhost:8000/api/question/";
	post(url, {question_text: "This is a question from js code."});
}

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}