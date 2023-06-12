from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from django.urls import path
from .views import FolderList, FolderDetail

urlpatterns = [
	path('folder/', FolderList.as_view()),
	path('folder/<int:pk>/', FolderDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)