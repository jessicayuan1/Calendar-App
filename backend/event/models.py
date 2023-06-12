from django.db import models
from django.conf import settings


class Event(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=256)
    description = models.CharField(max_length=4000)
    start = models.DateTimeField()
    end = models.DateTimeField(default=None)
    owner = models.ManyToManyField(settings.AUTH_USER_MODEL)
    nest_event_id = models.ForeignKey(
        'self', blank=True, null=True, related_name='parent_event_id', on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "Event: {}".format(self.name)


class Location(models.Model):
    event = models.ForeignKey(
        Event, related_name="location", on_delete=models.CASCADE)
    country = models.CharField(max_length=64)
    postal_code = models.CharField(max_length=12)
    state = models.CharField(max_length=64)
    city = models.CharField(max_length=64)
    address = models.CharField(max_length=64)

    def __str__(self):
        return self.name
