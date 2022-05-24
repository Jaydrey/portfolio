from rest_framework import serializers
from .models import (
    PersonalInfo, 
    EducationModel, 
    ContactsModel,
    )

class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = (
            "id", "first_name", "middle_name", "last_name",
            "dob", "nationality", "occupation", "age"
        )
        

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationModel
        fields = (
            "id", "level", "name", "certificate",
            "course", "date_completed"
        )

class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactsModel
        fields = (
            "id", "media_name", "media_url", "media_no"
        )

