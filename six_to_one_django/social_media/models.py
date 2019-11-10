from django.db import models
import json


class SocialPlatform(models.Model):
    platform_desc = models.CharField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return json.dumps({
            'Platform Description': self.platform_desc,
            'Date Created': self.date_created,
            'Date Updated': self.date_updated,
        })


class PostImage(models.Model):
    image = models.ImageField(width_field=2000, height_field=1000)
    date_uploaded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return json.dumps({
            'Image': self.image,
            'Date Uploaded ': self.date_uploaded,
        })


class BaseSocialMediaPost(models.Model):
    category = models.CharField(max_length=100)
    social_platform = models.ForeignKey(SocialPlatform, on_delete=models.CASCADE, related_name='social_platform')
    item_desc = models.CharField(max_length=300)
    price = models.DecimalField(max_digits=4, decimal_places=2)
    location = models.CharField(max_length=100)
    images = models.ForeignKey(PostImage, on_delete=models.CASCADE, related_name='post_images')
    date_posted = models.DateTimeField(auto_now=False)

    def __str__(self):
        return json.dumps({
            'Category': self.category,
            'Social Platform': self.social_platform,
            'Item Description': self.item_desc,
            'Price': self.price,
            'Location': self.location,
            'Images': self.images,
            'Date Posted': self.date_posted,
        })


# class SocialMediaMessage(models.Model):
#     sender = models.CharField(max_length=100)
#     date_sent = models.DateTimeField(auto_now=False, null=True)




