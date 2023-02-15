from uuid import uuid4

from django.db import models

class SomeUser(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    username = models.CharField(max_length=64)
    email = models.EmailField(max_length=120, unique=True)

