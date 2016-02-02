from tastypie.resources import ModelResource
from quesanswers.models import Question

class QuestionResource(ModelResource):
    class Meta:
        queryset = Question.objects.all()
        resource_name = 'question'