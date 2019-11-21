import re
import datetime
from django.contrib.auth import get_user_model
from django.core.validators import validate_email
from django.core.mail import send_mail
import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError

# TODO: Add: disable user, enable user


def send_error_message(file_path, message):
    with open(file_path, 'w') as file:
        file.writelines(message)
    file.close()


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class Query(graphene.ObjectType):
    all_users = graphene.List(UserType)
    me = graphene.Field(UserType)

    def resolve_all_users(self, info):
        return get_user_model().objects.all()

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise GraphQLError('Not logged in')

        return user


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        email = graphene.String(required=True)
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        password2 = graphene.String(required=True)

    def mutate(self, info, first_name, last_name, email, username, password,
               password2):
        user = get_user_model()(first_name=first_name,
                                last_name=last_name,
                                email=email,
                                username=username,
                                password=password)

        # validate user email
        if validate_email(email) is False:
            raise GraphQLError('Please enter a valid email')

        # check for existing email and username
        existing_email = get_user_model().objects.filter(email=email)
        existing_username = get_user_model().objects.filter(username=username)
        if len(existing_email) > 0:
            raise GraphQLError('User with that email already exists')
        if len(existing_username) > 0:
            raise GraphQLError(
                'That username is already taken. Please use another name.')

        # check for mismatches passwords
        if password != password2:
            raise GraphQLError('Passwords do not match')
        else:
            # password must meet security requirements
            if re.match(
                    r"^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$])[\w\d@#$]{6,12}$",
                    password):
                user.set_password(password)
                user.save()
                try:
                    send_mail(
                        subject='New Account has been Registered on Six-To-One',
                        message='New user has been created for {} {}'.format(first_name, last_name),
                        from_email='sender@six-to-one.com',
                        recipient_list=[email],
                    )

                except Exception as e:
                    send_error_message('six_to_one_django/error_logs.txt', '{} {}'.format(e.__str__(), datetime.datetime))
            else:
                raise GraphQLError(
                    'Password does not meet security requirements')
        return CreateUser(user=user)


class DeleteUser(graphene.Mutation):
    user = graphene.Field(UserType)

    def mutate(self, info):
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('No user found')
        else:
            get_user_model().objects.get(id=user.id).delete()

        return DeleteUser(user=user)


class DisableUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        status = graphene.Boolean(required=True)

    def mutate(self, info, status):
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('No user found')
        else:
            disabled_user = get_user_model().objects.get(id=user.id)
            if disabled_user.is_active:
                if status is False:
                    disabled_user.is_active = False
                    disabled_user.save()
            else:
                raise GraphQLError('Account is already disabled')


class EnableUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        status = graphene.Boolean(required=True)

    def mutate(self, info, status):
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('No user found')
        else:
            enabled_user = get_user_model().objects.get(id=user.id)
            if enabled_user.is_active:
                if status is True:
                    enabled_user.is_active = True
                    enabled_user.save()
            else:
                raise GraphQLError('Account is already enabled')


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    delete_user = DeleteUser.Field()
    disabled_user = DisableUser.Field()
    enabled_user = EnableUser.Field()
