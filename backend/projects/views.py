from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.http import Http404

from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .models import ProjectsModel, ProgramLanguageModel
from .serializers import ProjectsSerializer, ProgramLangSerializer


class ProjectListCreateView(generics.ListCreateAPIView):
    serializer_class = ProjectsSerializer
    queryset = ProjectsModel.objects.all()
    permission_classes = [IsAdminUser, IsAuthenticated]

class ProjectUpdateView(APIView):

    def get_object(self, name):
        try:
            obj = ProjectsModel.objects.get(name__iexact=name)
        except ProjectsModel.DoesNotExist:
            raise Http404
        return obj

    def get(self, request, name:str):
        obj = self.get_object(name)
        serializer = ProjectsSerializer(obj)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, name:str):
        obj = self.get_object(name)
        obj.name = request.data['name']
        obj.description = request.data["description"]
        obj.url = request.data["url"]
        obj.save()
        return Response(ProjectsSerializer(obj).data)

class ProjectListDeleteView(generics.RetrieveDestroyAPIView):
    serializer_class = ProjectsSerializer
    queryset = ProjectsModel.objects.all()
    permission_classes = [IsAdminUser, IsAuthenticated]
    lookup_field = "name"

    # def get_queryset(self):
    #     try:
    #         obj = ProjectsModel.objects.get(name__iexact=self.lookup_field)
    #     except ProjectsModel.DoesNotExist:
    #         raise Http404
    #     return obj

class ProgramingLangListCreateView(generics.ListCreateAPIView):
    serializer_class = ProgramLangSerializer
    queryset = ProgramLanguageModel.objects.all()
    permission_classes = [IsAdminUser, IsAuthenticated]

class ProgramingLangListUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = ProgramLangSerializer
    queryset = ProgramLanguageModel.objects.all()
    permission_classes = [IsAdminUser, IsAuthenticated]
    lookup_field = "name"

class ProgramingLangListDeleteView(generics.RetrieveDestroyAPIView):
    serializer_class = ProgramLangSerializer
    queryset = ProgramLanguageModel.objects.all()
    permission_classes = [IsAdminUser, IsAuthenticated]
    lookup_field = "name"