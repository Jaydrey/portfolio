from rest_framework import serializers
from .models import ProjectsModel, ProgramLanguageModel

class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectsModel
        fields = (
            "id", "name", "slug_name", "description",
            "url", "state", "languages_supported", 
            "last_edited", "date_created"
        )

class ProgramLangSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramLanguageModel
        fields = "__all__"