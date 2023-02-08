from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .filters import ProjectFilter
from .models import Project, Todo
from .serialized import ProjectModelSerializer, TodoModelSerializer


class ProjectLimitOffsetOagination(LimitOffsetPagination):
    default_limit = 10

class TodoLimitOffsetOagination(LimitOffsetPagination):
    default_limit = 20

class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetOagination
    filterset_class = ProjectFilter


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    pagination_class = TodoLimitOffsetOagination
    filterset_fields = ['todo_project']



    def destroy(self, request, *args, **kwargs):
        item = self.get_object()
        item.todo_deleted = True
        serializer = self.get_serializer(item)
        return Response(serializer.data)
