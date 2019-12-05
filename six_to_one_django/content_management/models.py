from django.db import models
import json


class PostType(models.Model):
    post_type_desc = models.CharField(max_length=50)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return json.dumps({
            'Type': self.post_type_desc,
            'Date Created': self.date_created,
            'Date Updated': self.date_updated,
        })


class BasePost(models.Model):
    post_type = models.ForeignKey(PostType, on_delete=models.CASCADE)
    post_title = models.CharField(max_length=50)
    post_body = models.CharField(max_length=500)

    def __str__(self):
        return json.dumps({
            'Type': self.post_type.__str__(),
            'Title': self.post_title,
            'Post Body': self.post_body,
        })


class PostImage(models.Model):
    image = models.ImageField(width_field=2000, height_field=1000)
    date_uploaded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return json.dumps({
            'Image': self.image,
            'Date Uploaded ': self.date_uploaded,
        })


class ProjectPost(BasePost):
    images = models.ForeignKey(PostImage, on_delete=models.CASCADE, related_name='post_images')
    start_date = models.DateTimeField(auto_now_add=False, null=True)
    end_date = models.DateTimeField(auto_now_add=False, null=True)

    def __str__(self):
        return json.dumps({
            'Images': self.images,
            'Start Date': self.start_date,
            'End Date': self.end_date,
        })