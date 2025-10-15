from django.db import models
# Create your models here.
class Category(models.Model):
    image = models.ImageField(upload_to='category/', null=True, blank=True, max_length=1000)
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name
    

class Subcategory(models.Model):
    image = models.ImageField(upload_to='subcategory/', null=True, blank=True, max_length=1000)
    name = models.CharField(max_length=100)
    category= models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    def __str__(self):
        return self.name


class Tour(models.Model):
    image = models.ImageField(upload_to='tour/', null=True, blank=True, max_length=1000)
    title = models.CharField(max_length=200)
    tour_description = models.TextField()
    price_adult = models.DecimalField(max_digits=8, decimal_places=2)
    price_child = models.DecimalField(max_digits=8, decimal_places=2)
    tour_duration = models.IntegerField(help_text="Duration in days")
    tour_details = models.TextField()
    tour_status = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    places_covered = models.TextField()
    extra_details = models.TextField()
    subcategory = models.ForeignKey(Subcategory, on_delete=models.CASCADE, null=True, blank=True)
    def __str__(self):
        return self.title


