import graphene
from graphene_django import DjangoObjectType
from someusers.models import SomeUser
from projects.models import Todo,Project

class SomeUserType(DjangoObjectType):
    class Meta:
        model = SomeUser
        fields = '__all__'

class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'

class ToDoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'

class Query(graphene.ObjectType):
    all_users = graphene.List(SomeUserType)
    all_projects = graphene.List(ProjectType)
    all_todos = graphene.List(ToDoType)

    def resolve_all_users(root, info):
        return SomeUser.objects.all()

    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_all_todos(root, info):
        return Todo.objects.all()

schema = graphene.Schema(query=Query)