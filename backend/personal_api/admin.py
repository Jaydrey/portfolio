from django.contrib import admin
from .models import (
    PersonalInfo, EducationModel
)
# Register your models here.
class PersonalInfoAdmin(admin.ModelAdmin):
    list_display = (
        "first_name", "last_name",
        "occupation", "dob", "age"
    )
    search_fields = ("first_name",)
    class Meta:
        model = PersonalInfo

admin.site.register(PersonalInfo, PersonalInfoAdmin)

class EducationAdmin(admin.ModelAdmin):
    list_display = (
        "level", "name", "date_completed",
    )
    list_filter = ("level",)
    class Meta:
        model = EducationModel
        ordering = ("-date_completed",)

admin.site.register(EducationModel, EducationAdmin)
