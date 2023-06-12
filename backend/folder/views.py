from rest_framework import generics
from .serializers import FolderSerializer
from .models import Folder


class FolderList(generics.ListAPIView): 
    queryset = Folder.objects.all()
    serializer_class = FolderSerializer 

class FolderDetail(generics.RetrieveAPIView):   
    queryset = Folder.objects.all()
    serializer_class = FolderSerializer 


   
