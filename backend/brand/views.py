from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import Brand
from .serializers import BrandSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def brand_home(request):
    """
    Simple API endpoint for brand homepage.
    """
    data = {
        "name": "Tivachi Rugs",
        "description": "Welcome to Tivachi Rugs, the best place for handmade rugs!",
        "website": "http://localhost:3000"
    }
    return Response(data)

class BrandDetailView(generics.RetrieveAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer