
from django.shortcuts import get_object_or_404

from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .serializers import (
    PersonalInfoSerializer, EducationSerializer,
    ContactsSerializer)
from .models import (
    PersonalInfo, EducationModel, ContactsModel)

# custom mixin to look up multiple fields
# class MultipleFieldLookUpMixin:
    
#     def get_object(self):
#         queryset = self.get_queryset()
#         queryset = queryset.filter(queryset)
#         filter = {}
#         for field in self.lookup_fields:
#             if self.kwargs[field]:
#                 filter[field] = self.kwargs[field]

#         obj = get_object_or_404(queryset, **filter)
#         self.check_object_permissions(self.request, obj)
#         return obj


class PersonalListView(generics.ListCreateAPIView):
    serializer_class = PersonalInfoSerializer
    queryset = PersonalInfo.objects.all()
    permission_classes = [IsAdminUser, IsAuthenticated]

class PersonalUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = PersonalInfoSerializer
    queryset = PersonalInfo.objects.all()
    permission_classes = [IsAdminUser, IsAuthenticated]
    lookup_field = "pk"

class EducationListView(generics.ListCreateAPIView):
    serializer_class = EducationSerializer
    queryset = EducationModel.objects.all()
    permission_classes = [IsAdminUser, IsAuthenticated]

class EducationUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = EducationSerializer
    queryset = EducationModel.objects.all()
    lookup_field = "pk"
    permission_classes = [IsAdminUser, IsAuthenticated]

class EducationDeleteView(generics.RetrieveDestroyAPIView):
    serializer_class = EducationSerializer
    queryset = EducationModel.objects.all()
    lookup_field = "pk"
    permission_classes = [IsAdminUser, IsAuthenticated]

class ContactsListView(generics.ListCreateAPIView):
    serializer_class = ContactsSerializer
    queryset = ContactsModel.objects.all()
    permission_classes = [IsAdminUser, IsAuthenticated]

class ContactsUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = ContactsSerializer
    queryset = ContactsModel.objects.all()
    lookup_field = "media_name"
    permission_classes = [IsAdminUser, IsAuthenticated]

class ContactsDeleteView(generics.RetrieveDestroyAPIView):
    serializer_class = ContactsSerializer
    queryset = ContactsModel.objects.all()
    lookup_field = "media_name"
    permission_classes = [IsAdminUser, IsAuthenticated]