from django.contrib import admin
from .models import ProjectsModel, ProgramLanguageModel

# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "name", "state", "date_created", "last_edited"
    )
    search_fields = ("name", "state", "languages_supported")
    list_filter = ("state", "languages_supported", "date_created")

    class Meta:
        ordering = "-date_created"

admin.site.register(ProjectsModel, ProjectAdmin)


class ProgramLanguageAdmin(admin.ModelAdmin):
    list_display = ("name", "framework", "level")
    search_fields = ("name",)
    list_filter = ("name",)

    class Meta:
        ordering = "name"

admin.site.register(ProgramLanguageModel, ProgramLanguageAdmin)