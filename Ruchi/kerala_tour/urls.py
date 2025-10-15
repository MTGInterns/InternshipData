from django.contrib import admin
from django.urls import path
from core import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('category/', views.CategoryView),
    # path('category/<int:id>/', views.CategoryView),
    path('subcategory/', views.SubcategoryView),
    path('tour/', views.TourView),
]

