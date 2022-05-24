from django.db import models
from projects.models import ProjectsModel


class RefereeModel(models.Model):
    name = models.CharField(max_length=70)
    level = models.CharField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name}"



class WorkExperienceModel(models.Model):
    company_name = models.CharField(blank=True, null=True, max_length=100)
    role = models.CharField(blank=True, null=True, max_length=50)
    date_started = models.DateField(blank=True, null=True)
    date_left = models.DateField(blank=True, null=True)
    project = models.ForeignKey(ProjectsModel, on_delete=models.CASCADE)
    referee = models.ForeignKey(RefereeModel, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        if self.role:
            return f"{self.role}"
        return f"Did Projects"
        
