from django.db import models

class ProgramLanguageModel(models.Model):
    languages = (
        ("Py", "Python"), 
        ("Js", "JavaScript"), 
        ("R", "R Language"), 
        ("Go", "GoLang"), 
        ("C++", "CPlusPlus"), 
        ("SQL", "Structured Query Language"), 
        ("HTML", "Hypertext Mark Up Language"), 
        ("CSS", "Cascading Style Sheet"))
    frameworks = (
        ("NN", "None"),
        ("DJ", "Django"), 
        ("FL", "Flask"), 
        ("RJs", "ReactJs"), 
        ("EJS", "ExpressJs"), 
        ("NJS", "NodeJs"), 
        ("MUI", "Material-UI"), 
        ("TWC", "TailWindCss"), 
        ("BTS", "BootStrap"))
    name = models.CharField(choices=languages, max_length=4)
    framework = models.CharField(choices=frameworks, max_length=4)
    level = models.FloatField(default=1.0)

    def __str__(self):
        return f"{self.name}"



class ProjectsModel(models.Model):
    options = (
        ('PR', 'private'), 
        ('PB', 'public'))

    name = models.CharField(max_length=200, unique=True)
    # slug = models.SlugField(max_length=200, blank=True, null=True)
    description = models.TextField(help_text="project description")
    url = models.URLField(blank=True, null=True, max_length=300)
    # rate = models.ManyToManyField("app.Model", verbose_name=_(""))
    state = models.CharField(choices=options, max_length=2)
    languages_supported = models.ManyToManyField(ProgramLanguageModel)
    date_created = models.DateTimeField(auto_now_add=True)  
    last_edited = models.DateTimeField(auto_now=True)

    @property
    def slug_name(self)->str:
        return "-".join(self.name.lower().split(" "))
    
    def __str__(self):
        return f"{self.slug_name}"

