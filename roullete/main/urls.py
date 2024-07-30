from django.urls import path

from main.views import (HomeView, ItemView)

urlpatterns = [
    path('', HomeView.as_view(), name='home_page'),
    path('item/', ItemView.as_view(), name='item_page'),
]