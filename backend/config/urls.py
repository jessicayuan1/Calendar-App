"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views import generic
from rest_framework.schemas import get_schema_view
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # Django Views
    path('admin/', admin.site.urls),
    # Rest Framework Views Schema/Architecture
    path('', generic.RedirectView.as_view(url='/api/', permanent=False)),
    path('api/', get_schema_view()),
    # Rest Framework Views Auth
    path(
        'api/auth/',
        include('rest_framework.urls', namespace='rest_framework')
    ),
    path(
        'api/auth/token/obtain/',
        TokenObtainPairView.as_view(),
        name='token_obtain_pair'
    ),
    path(
        'api/auth/token/refresh/',
        TokenRefreshView.as_view(),
        name='token_refresh'
    ),
    # Rest Framework Views Apps
    path('api/', include('users.urls')),
    path('api/', include('folder.urls')),
    path('api/', include('stopwatch.urls')),
    path('api/', include('event.urls')),
    path('api/', include('django.contrib.auth.urls')),
]
