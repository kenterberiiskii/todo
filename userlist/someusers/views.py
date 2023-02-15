from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from .models import SomeUser
from .serializers import UserModelSerializer, UserModelSerializerBase


class UserModelViewSet(ModelViewSet):
    queryset = SomeUser.objects.all()
    serializer_class = UserModelSerializer
    http_method_names = ['get', 'post', 'head', 'put']

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return UserModelSerializer
        return UserModelSerializerBase


