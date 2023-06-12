from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Stopwatch, DatetimeInterval

# Register your models here.

class StopwatchAdmin(admin.ModelAdmin):
	list_display = ('id','user','task','duration')

admin.site.register(Stopwatch, StopwatchAdmin)
admin.site.register(DatetimeInterval)