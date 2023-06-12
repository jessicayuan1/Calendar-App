from rest_framework import serializers
from .models import Stopwatch, DatetimeInterval
from django.contrib.auth.models import User

class DatetimeIntervalSerialzier(serializers.ModelSerializer):
	class Meta:
		model = DatetimeInterval
		fields = ('start', 'end')

class StopwatchSerializer(serializers.ModelSerializer):
	datetimeIntervalSet = DatetimeIntervalSerialzier(many=True)
	class Meta:
		model = Stopwatch
		fields = ('id','task','duration','datetimeIntervalSet')

	def create(self, validated_data):
		datetime_interval_validated_data = validated_data.pop('datetimeIntervalSet')
		stopwatch = Stopwatch.objects.create(**validated_data)
		datetime_interval_set_serializer = self.fields['datetimeIntervalSet']
		for each in datetime_interval_validated_data:
			each['stopwatch'] = stopwatch
		datetime_interval_set_serializer.create(datetime_interval_validated_data)
		return stopwatch
