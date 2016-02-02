// add jquery
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

run();

function run() {
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
}