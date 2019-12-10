from django.contrib.auth import get_user_model
import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError
from six_to_one_django.content_management.models import ProjectPost, PostImage, PostType, DeletedPosts


class ProjectPostType(DjangoObjectType):
    class Meta:
        model = ProjectPost


class PostImageType(DjangoObjectType):
    class Meta:
        model = PostImage


class PostType(DjangoObjectType):
    class Meta:
        model = PostType


class DeletedPostType(DjangoObjectType):
    class Meta:
        model = DeletedPosts


class Query(graphene.ObjectType):
    all_project_posts = graphene.List(ProjectPostType)

    def resolve_project_posts(self, info):
        return ProjectPost.objects.all()


class Mutation(graphene.ObjectType):
    project = graphene.Field(ProjectPostType)

    class Arguments:
        pass
