from rest_framework.viewsets import ModelViewSet
from .models import SomeUser
from .serializers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
    queryset = SomeUser.objects.all()
    serializer_class = UserModelSerializer
    http_method_names = ['get', 'post', 'head', 'put']

