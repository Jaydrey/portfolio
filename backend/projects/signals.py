from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from .models import ProjectsModel
from django.utils.text import slugify

@receiver(pre_save, sender=ProjectsModel)
def project_pre_save(sender, instance, **kwargs):
    if not instance.slug:
        instance.slug = slugify(instance.name)
        instance.save()
    