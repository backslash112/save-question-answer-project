from django.db import models

# Create your models here.

class Question(models.Model):
    question_text = models.CharField(max_length=500)
    answer = models.IntegerField(default=0)
    def __str__(self):
        return self.question_text + ": " + str(self.answer)
