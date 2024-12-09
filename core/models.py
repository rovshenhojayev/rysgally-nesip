from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='products/')
    specifications = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Document(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='documents/')
    created_at = models.DateTimeField(auto_now_add=True)
    order = models.IntegerField(default=0)  # For controlling display order

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title
