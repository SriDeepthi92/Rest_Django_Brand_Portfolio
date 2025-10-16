from django.urls import path
from .views import BrandDetailView, brand_home

urlpatterns = [
    path('<int:pk>/', BrandDetailView.as_view(), name='brand-detail'),
    path('', brand_home, name='brand-home'),
]