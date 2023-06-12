from django.db import models
from django.conf import settings

class Folder(models.Model):
    folder_id = models.AutoField(primary_key=True)           
    folder_name = models.CharField(max_length = 100)          
    date_created = models.DateTimeField(auto_now_add= True)     
    icon_to_url_s3 = models.URLField(blank = True)
    date_modified = models.DateTimeField(auto_now=True)
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE)      
    nest_folder_id = models.ForeignKey("self", related_name='parent_folder_id', on_delete = models.CASCADE, null = True, blank = True)

    def __str__(self):  
        return self.folder_name
