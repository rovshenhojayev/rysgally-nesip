from django.shortcuts import render
from .models import Product

def home(request):
    return render(request, 'core/home.html')

def about(request):
    return render(request, 'core/about.html')

def contact(request):
    return render(request, 'core/contact.html')

def products(request):
    products = Product.objects.all()
    return render(request, 'core/products.html', {'products': products})
