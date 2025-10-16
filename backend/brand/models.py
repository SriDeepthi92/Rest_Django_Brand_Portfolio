from django.db import models

class Brand(models.Model):
    name = models.CharField(max_length=255)
    tagline = models.CharField(max_length=255, blank=True)
    description = models.TextField()
    hero_image = models.ImageField(upload_to="brand/", blank=True, null=True)
    mission = models.TextField(blank=True)
    vision = models.TextField(blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name