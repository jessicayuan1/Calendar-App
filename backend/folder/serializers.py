from .models import Folder
from rest_framework import serializers

class NestFolderSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Folder
        fields = (
            'folder_id',
            'folder_name',
            'date_created',
            'icon_to_url_s3',
            'date_modified',
            'user_id',
            'nest_folder_id',
            )

class FolderSerializer(serializers.ModelSerializer):
    nest_folder_id = NestFolderSerializer()

    class Meta: 
        model = Folder
        fields = (
            'folder_id',
            'folder_name',
            'date_created',
            'icon_to_url_s3',
            'date_modified',
            'user_id',
            'nest_folder_id',
            )
            
