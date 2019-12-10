from django.contrib import admin
from .models import ProjectPost, PostImage, PostType, DeletedPosts

admin.site.register(ProjectPost)
admin.site.register(PostImage)
admin.site.register(PostType)
admin.site.register(DeletedPosts)
