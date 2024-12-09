from django.contrib import admin
from .models import Document, Product

@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ('title', 'order', 'created_at')
    list_editable = ('order',)
    search_fields = ('title',)
    list_filter = ('created_at',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at')
    search_fields = ('name', 'description')
    list_filter = ('created_at',)
