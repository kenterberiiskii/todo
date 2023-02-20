from rest_framework import generics
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from .models import SomeUser, SuperUser
from .serializers import UserModelSerializer, UserModelSerializerBase, SuperUserModelSerializerBase


class UserModelViewSet(ModelViewSet):
    queryset = SomeUser.objects.all()
    serializer_class = UserModelSerializer
    http_method_names = ['get', 'post', 'head', 'put']

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return UserModelSerializer
        return UserModelSerializerBase

class UserListAPIView(generics.ListAPIView):
    # queryset = SomeUser.objects.all()
    serializer_class = UserModelSerializer

    def get_queryset(self):
        if self.request.version == '0.2':
            return SuperUser.objects.all()
        return SomeUser.objects.all()

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return SuperUserModelSerializerBase
        return UserModelSerializer
