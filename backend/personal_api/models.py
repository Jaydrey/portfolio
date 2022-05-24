# django database modules
from django.db import models
from django.contrib.auth.models import User
# date modules
import datetime
from django.utils import timezone
# signal modules
from django.db.models.signals import (
    post_save, pre_save, post_delete, pre_delete)
from django.dispatch import receiver

# Create your models here.
class PersonalInfo(models.Model):
    first_name = models.CharField(max_length=15, default="Jarib")
    middle_name = models.CharField(max_length=15, default="Ngonzo")
    last_name = models.CharField(max_length=15, default="Wetshi")
    dob = models.DateField()
    nationality = models.CharField(max_length=15, default="Congolese")
    occupation = models.CharField(max_length=50, default="BackEnd Developer")
    profile = models.ImageField(upload_to='profile-pic', null=True)

    @property
    def age(self):
        today = datetime.date.today()
        return today.year - self.dob.year - ((today.month, today.day)<(self.dob.month, self.dob.day))

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class ContactsModel(models.Model):
    media_name = models.CharField(max_length=50, help_text="social media")
    media_url = models.URLField(max_length=300, blank=True, null=True)
    media_no = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return f"{self.media_name}"

# @receiver(contact_pre_save, ContactsModel)
# def contact_pre_save(sender)

class EducationModel(models.Model):
    options = (
        ("PS", "PrimarySchool"), 
        ("HS", "HighSchool"), 
        ("UN", "University"))
    certs = (
        ("KCPE", "Kenya Certificate of Primary Education"), 
        ("KCSE", "Kenya Certificate of Secondary Education"), 
        ("BSDE", "Bachelors Degree"))
    level = models.CharField(choices=options, max_length=2)
    name = models.CharField(max_length=50, help_text="institution name")
    certificate = models.CharField(choices=certs, max_length=4)    
    course = models.CharField(max_length=100, blank=True, null=True)
    certificate_image = models.ImageField(upload_to="certificates", null=True)
    date_completed = models.DateField()

    def __str__(self):
        return f"{self.name}"



