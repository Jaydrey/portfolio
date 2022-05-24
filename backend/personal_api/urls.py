from django.urls import path, re_path

from .views import (
    PersonalListView, 
    PersonalUpdateView,
    EducationListView,
    EducationUpdateView,
    EducationDeleteView,
    ContactsListView,
    ContactsUpdateView,
    ContactsDeleteView,
)

app_name = "personal_api"

urlpatterns = [
    path("infos/", PersonalListView.as_view(), name="infos"),
    path("infos/<int:pk>/", PersonalUpdateView.as_view(), name="update_info"),
    path("education/", EducationListView.as_view(), name="education"),
    path("education/<int:pk>/", EducationUpdateView.as_view(), name="update_education"),
    path("education/<int:pk>/delete", EducationDeleteView.as_view(), name="delete_education"),
    path("contacts/", ContactsListView.as_view(), name="contacts"),
    path("contacts/<str:media_name>/", ContactsUpdateView.as_view(), name="update_contact"),
    path("contacts/<str:media_name>/delete/", ContactsDeleteView.as_view(), name="delete_contact"),

]
