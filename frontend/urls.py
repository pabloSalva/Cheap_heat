from django.urls import path
from .views import index, MaterialDetailView

urlpatterns = [

    path('', index),
    path('edit/<int:pk>',MaterialDetailView.as_view()),
    path('delete/<int:pk>',MaterialDetailView.as_view()),

]