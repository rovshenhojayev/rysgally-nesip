from django.shortcuts import render
from .models import Document, Product

def get_common_context(request):
    return {
        'redirect_to': request.get_full_path()
    }

def home(request):
    context = get_common_context(request)
    context['products'] = Product.objects.all()[:4]  # Get first 4 products for featured section
    return render(request, 'core/home.html', context)

def about(request):
    context = get_common_context(request)
    return render(request, 'core/about.html', context)

def contact(request):
    context = get_common_context(request)
    return render(request, 'core/contact.html', context)

def products(request):
    context = get_common_context(request)
    context['products'] = Product.objects.all().order_by('-created_at')
    return render(request, 'core/products.html', context)

def documents(request):
    context = get_common_context(request)
    context['documents'] = Document.objects.all()
    return render(request, 'core/documents.html', context)
