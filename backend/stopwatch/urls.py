from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = [
	path('stopwatches/', views.StopwatchList.as_view()),
	path('stopwatches/<int:pk>/', views.StopwatchDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)