from django.shortcuts import render
# from rest_framework.response import Response
from rest_framework.decorators import api_view as core_view
from rest_framework.renderers import JSONRenderer
from .models import Category, Tour, Subcategory
from django.http import HttpResponse
from .serializers import CategorySerializer, TourSerializer, SubcategorySerializer
# Create your views here.
@core_view(['GET'])
def CategoryView(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    json_data = JSONRenderer().render(serializer.data)
    return HttpResponse(json_data, content_type='application/json')
    # return Response(serializer.data)


@core_view(['GET'])
def SubcategoryView(request):
    subcategories = Subcategory.objects.all()
    serializer = SubcategorySerializer(subcategories, many=True)
    json_data = JSONRenderer().render(serializer.data)
    return HttpResponse(json_data, content_type='application/json')


@core_view(['GET'])
def TourView(request):
    tour = Tour.objects.all()
    serializer = TourSerializer(tour, many=True)
    json_data = JSONRenderer().render(serializer.data)
    return HttpResponse(json_data, content_type='application/json')
    # return Response(serializer.data)
    
