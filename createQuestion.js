<script src="jquery-1.6.1.js"></script>
<script src="my_jquery.js"></script>

var data = JSON.stringify({
	"question_text": "This is a question from js code.",
	"answer": 1
});

$.ajax({
  url: 'http://localhost:8000/api/question/',
  type: 'POST',
  contentType: 'application/json',
  data: data,
  dataType: 'json',
  processData: false
});