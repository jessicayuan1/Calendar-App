from django.shortcuts import render
from .serializers import StopwatchSerializer
from rest_framework import generics
from .models import Stopwatch

# Create your views here.


class StopwatchList(generics.ListAPIView):

    queryset = Stopwatch.objects.all()
    serializer_class = StopwatchSerializer


class StopwatchDetail(generics.RetrieveAPIView):

    queryset = Stopwatch.objects.all()
    serializer_class = StopwatchSerializer
