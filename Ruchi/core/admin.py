from django.contrib import admin
from .models import Category, Subcategory, Tour
# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name','image']


@admin.register(Subcategory)
class SubcategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'image','category']


@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    list_display = ['image', 'title', 'tour_description', 'price_adult', 'price_child', 'tour_duration','tour_details', 'tour_status', 'created_at', 'places_covered', 'extra_details', 'subcategory']

