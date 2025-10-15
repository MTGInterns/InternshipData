from rest_framework import serializers
from  .models import Category, Tour, Subcategory 
class CategorySerializer(serializers.ModelSerializer):
    image = serializers.ImageField()
    name = serializers.CharField(max_length=100)
    class Meta:
        model = Category
        fields = '__all__'
        

class SubcategorySerializer(serializers.ModelSerializer):
    image = serializers.ImageField()
    name = serializers.CharField(max_length=100)
    category_id = serializers.IntegerField()
    class Meta:
        model = Subcategory
        fields = '__all__'


class TourSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()
    title = serializers.CharField(max_length=200)
    tour_description = serializers.CharField()
    price_adult = serializers.DecimalField(max_digits=8, decimal_places=2)
    price_child = serializers.DecimalField(max_digits=8, decimal_places=2)
    tour_duration = serializers.IntegerField(help_text="Duration in days",  read_only=True, default=1)
    tour_details = serializers.CharField()
    tour_status = serializers.CharField(max_length=50)
    created_at = serializers.DateTimeField(read_only=True)
    places_covered = serializers.CharField()
    extra_details = serializers.CharField()
    subcategory = serializers.CharField(source='subcategory.name', read_only=True)
    class Meta:
        model = Tour
        fields = '__all__'
        