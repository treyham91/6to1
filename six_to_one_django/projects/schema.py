import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError
from .models import ProjectType, BaseProject
from django.core.validators import validate_email
from django.core.mail import send_mail
import datetime


class Project(DjangoObjectType):
    class Meta:
        model = ProjectType


class BaseProjectType(DjangoObjectType):
    class Meta:
        model = BaseProject


class Query(graphene.ObjectType):
    all_projects = graphene.List(BaseProjectType)
    project_types = graphene.List(Project)

    def resolve_all_projects(self, info):
        return BaseProject.objects.all()


class CreateProject(graphene.Mutation):
    project = graphene.Field(ProjectType)

    class Arguments:
        customer_name = graphene.String(required=True)
        customer_email = graphene.String(required=True)
        project_type = graphene.Int(required=True)
        price = graphene.Decimal(required=False)
        due_date = graphene.DateTime(required=False)
        paid_status = graphene.Boolean(required=True)
        start_date = graphene.DateTime(required=False)
        end_date = graphene.DateTime(required=False)

    def mutate(self, info, customer_name, customer_email, project_type, price, due_date, paid_status,
               start_date, end_date):

        user = info.context.user
        if user.is_anonymous:
            raise GraphQLError('No user found')

        project = BaseProject(customer_name,
                              customer_email,
                              project_type,
                              price,
                              due_date,
                              paid_status,
                              start_date,
                              end_date)

        if validate_email(customer_email) is False:
            raise GraphQLError('Please enter a valid email')
        else:
            try:
                project.save()
            except Exception as e:
                with open('project_logs.txt', 'w') as file:
                    file.write('{} {}'.format(e.__str__(), datetime.datetime.now()))
                file.close()
                raise GraphQLError('Error. Could not save project to database. Please refer to the error'
                                   'log files for further information regarding this issue.')

        return CreateProject(project=project)


class DeleteProject(graphene.Mutation):
    project = graphene.Field(ProjectType)

    class Arguments:
        project_id = graphene.Int(required=True)

    def mutate(self, info, project_id):
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('No user found')
        else:
            project = BaseProject.objects.get(id=project_id)
            project.delete()

        return DeleteProject(project=project)
