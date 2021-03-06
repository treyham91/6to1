# Generated by Django 2.2.7 on 2019-11-05 06:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PostImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(height_field=1000, upload_to='', width_field=2000)),
                ('date_uploaded', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='PostType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('post_type_desc', models.CharField(max_length=50)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('date_updated', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='BasePost',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('post_title', models.CharField(max_length=50)),
                ('post_body', models.CharField(max_length=500)),
                ('post_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='content_management.PostType')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectPost',
            fields=[
                ('basepost_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='content_management.BasePost')),
                ('start_date', models.DateTimeField(null=True)),
                ('end_date', models.DateTimeField(null=True)),
                ('images', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='post_images', to='content_management.PostImage')),
            ],
            bases=('content_management.basepost',),
        ),
    ]
