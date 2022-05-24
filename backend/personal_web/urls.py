from django.urls import path
from .views import (
    main, 
    login_view,
    about_view,
    services_view,
    skills_view,
    contact_view)

app_name = "personal_web"

urlpatterns = [
    path("", main, name="home"),
    path("login/", login_view, name="login"),
    path("about/", about_view, name="about"),
    path("services/", services_view, name="services"),
    path("skills/", skills_view, name="skills"),
    path("contact/", contact_view, name="contact"),
]
