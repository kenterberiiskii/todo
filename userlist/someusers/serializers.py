from rest_framework.serializers import HyperlinkedModelSerializer
from .models import SomeUser, SuperUser

class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = SomeUser
        fields = '__all__'

class UserModelSerializerBase(HyperlinkedModelSerializer):
    class Meta:
        model = SomeUser
        fields = '__all__'

class SuperUserModelSerializerBase(HyperlinkedModelSerializer):
    class Meta:
        model = SuperUser
        fields = '__all__'