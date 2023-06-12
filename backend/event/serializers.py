from rest_framework import serializers
from .models import Event, Location


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('country', 'postal_code', 'city', 'state', 'address')


class NestEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('name', 'id', 'nest_event_id', 'start', 'end')


class EventSerializer(serializers.ModelSerializer):
    nest_event_id = NestEventSerializer()

    class Meta:
        model = Event
        fields = ('name', 'id', 'nest_event_id', 'start', 'end')
