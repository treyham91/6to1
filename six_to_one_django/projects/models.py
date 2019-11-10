from django.db import models
import json


class ProjectType(models.Model):
    type_desc = models.CharField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return json.dumps({
            'Type': self.type_desc,
            'Date Created': self.date_created,
            'Date Updated': self.date_updated,
        })


class BaseProject(models.Model):
    customer_name = models.CharField(max_length=100)
    project_type = models.ForeignKey(ProjectType, on_delete=models.CASCADE, related_name='project_type')
    price = models.DecimalField(max_digits=4, decimal_places=2)
    due_date = models.DateTimeField(auto_now=False, null=True)
    paid_status = models.BooleanField(default=False)
    start_date = models.DateTimeField(auto_now=False, null=True)
    end_date = models.DateTimeField(auto_now=False, null=True)

    def __str__(self):
        return json.dumps({
            'Customer': self.customer_name,
            'Project Type': self.project_type,
            'Price': self.price,
            'Due Date': self.due_date,
            'Paid Status': self.paid_status,
            'Start Date': self.start_date,
            'End Date': self.end_date,
        })
