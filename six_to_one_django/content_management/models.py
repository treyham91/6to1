from django.db import models
import json


class PostType(models.Model):
    post_type_desc = models.CharField(max_length=50)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '%s' % self.post_type_desc


class BasePost(models.Model):
    post_type = models.ForeignKey(PostType, on_delete=models.CASCADE)
    post_title = models.CharField(max_length=50)
    post_body = models.CharField(max_length=500)

    # def __str__(self):
    #     return '%s %s %s' % self.post_type.__str__(), self.post_title, self.post_body


class ProjectPost(BasePost):
    start_date = models.DateTimeField(auto_now_add=False, null=True)
    end_date = models.DateTimeField(auto_now_add=False, null=True)

    # def __str__(self):
    #     return '%s %s' % self.post_title, self.post_body


class PostImage(models.Model):
    image = models.ImageField()
    post = models.ForeignKey(
        ProjectPost, related_name='post', on_delete=models.CASCADE)
    date_uploaded = models.DateTimeField(auto_now_add=True)

    # def __str__(self):
    #     return '%s %s' % self.image, self.date_uploaded


class DeletedPosts(ProjectPost):
    deleted = models.BooleanField()

    def __str__(self):
        return '%s %s' % self.post_title, str(self.deleted)
