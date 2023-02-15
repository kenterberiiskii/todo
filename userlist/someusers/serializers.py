from rest_framework.serializers import HyperlinkedModelSerializer
from .models import SomeUser

class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = SomeUser
        fields = '__all__'

class UserModelSerializerBase(HyperlinkedModelSerializer):
    class Meta:
        model = SomeUser
        fields = '__all__'