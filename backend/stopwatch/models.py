from django.conf import settings
from django.db import models

# Create your models here.

class Stopwatch(models.Model):
	id = models.AutoField(primary_key=True)

	user = models.ForeignKey(
		settings.AUTH_USER_MODEL,
		on_delete=models.CASCADE,
	)
	task = models.CharField(max_length=120)
	duration = models.DurationField()
	
	def __str__(self):
		return "Activity: {} Duration: {}".format(self.task, self.duration)
		
class DatetimeInterval(models.Model):
	stopwatch = models.ForeignKey(Stopwatch, related_name="datetime_interval_set", on_delete=models.CASCADE)
	start = models.DateTimeField()
	end = models.DateTimeField()
	
	def __str__(self):
		return "({}, {})".format(self.start, self.end)
