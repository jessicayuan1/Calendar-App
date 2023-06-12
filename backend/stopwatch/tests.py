from django.test import TestCase
from .models import Stopwatch, DatetimeInterval
from django.contrib.auth import get_user_model
from datetime import datetime, timedelta

# Create your tests here.

class StopwatchTests(TestCase):

	def test_create_stopwatch(self):
		User = get_user_model()
		user = User.objects.create_user(email='user@domain.com', password='1234567890')
		stopwatch = Stopwatch.objects.create(
			id = 1,
			user = user,
			task = "test",
			duration = timedelta(days=0, hours=0)
		)
		stopwatch.save()
		now = datetime.now()
		datetime_interval = DatetimeInterval.objects.create(
			stopwatch = stopwatch,
			start = now,
			end = now
		)
		datetime_interval.save()
		self.assertEqual(datetime_interval.start, now)
		self.assertEqual(datetime_interval.end, now)
		self.assertEqual(datetime_interval.stopwatch, stopwatch)
		self.assertEqual(stopwatch.user, user)
		self.assertEqual(stopwatch.task, "test")
		self.assertEqual(stopwatch.duration, timedelta(days=0, hours=0))
