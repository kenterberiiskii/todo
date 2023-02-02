from uuid import uuid4

from django.db import models


class Project(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True)
    prj_name = models.CharField(max_length=64, unique=True)
    prj_link = models.CharField(max_length=128)
    prj_users = models.CharField(max_length=64)


class Todo(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True)
    todo_project = models.ForeignKey(Project, on_delete=models.CASCADE)
    todo_text = models.CharField(max_length=256)
    todo_create = models.DateTimeField()
    todo_update = models.DateTimeField()
    todo_author = models.CharField(max_length=128)
    todo_deleted = models.BooleanField(default=False)
