from django.shortcuts import render
from .serializers import EventSerializer
from rest_framework import generics
from .models import Event

# Create your views here.

class EventList(generics.ListAPIView, generics.CreateAPIView):

    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventDetail(generics.RetrieveAPIView, generics.CreateAPIView):

    queryset = Event.objects.all()
    serializer_class = EventSerializer


