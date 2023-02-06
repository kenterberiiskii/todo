from django_filters import rest_framework as filters
from .models import Project, Todo


# class TodoFilter(filters.FilterSet):
#     prj_name = filters.CharFilter(lookup_expr='contains')
#
#     class Meta:
#         model = Todo
#         fields = ['prj_name']

class ProjectFilter(filters.FilterSet):
    prj_name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['prj_name']