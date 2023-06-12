from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Folder

class FolderAdmin(admin.ModelAdmin):
    model = Folder

admin.site.register(Folder, FolderAdmin)