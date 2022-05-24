from django.urls import path
from .views import (
    ProjectListCreateView,
    ProjectUpdateView,
    ProjectListDeleteView,
    ProgramingLangListCreateView,
    ProgramingLangListUpdateView,
    ProgramingLangListDeleteView)

app_name = "projects"

urlpatterns = [
    path('', ProjectListCreateView.as_view(), name="projects"),
    path('<str:name>/', ProjectUpdateView.as_view(), name="update_project"),
    path('<str:name>/delete/', ProjectListDeleteView.as_view(), name="delete_project"),
    path('program-languages/view/', ProgramingLangListCreateView.as_view(), name="program_languages"),
    path('program-languages/<str:name>/', ProgramingLangListUpdateView.as_view(), name="update_language"),
    path('program-language/<str:name>/delete/', ProgramingLangListDeleteView.as_view(), name="delete_language"),
]
