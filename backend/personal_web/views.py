from django.shortcuts import render

# Create your views here.
def main(request):
    return render(request, "personal_web/home.html", {"request": "Got it right"})

def login_view(request):
    return render(request, "personal_web/login.html", {})

def about_view(request):
    return render(request, "personal_web/about.html", {})
    
def services_view(request):
    return render(request, "personal_web/services.html", {})

def skills_view(request):
    return render(request, "personal_web/skills.html", {})

def contact_view(request):
    return render(request, "personal_web/contacts.html", {})