import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import UserModelViewSet
from .models import SomeUser

class TestUsersViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('api-user/')
        view = UserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post('api-user/', {'first_name': 'First', 'last_name': 'Last', 'username': 'User', 'email': 'somemail@somecom.ru'}, format='json')
        view = UserModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_detail(self):
        author = SomeUser.objects.create(first_name='First', last_name='Last', username='User', email='somemail@somecom.ru')
        client = APIClient()
        response = client.get(f'api-user/{User.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class TestUserViewSet(APITestCase):
    def test_get_list(self):
        response = self.client.get('api-user/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)