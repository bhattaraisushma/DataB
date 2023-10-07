from django.urls import path
from .views import HomeView, HelloView

urlpatterns = [
    path("", HomeView.as_view(), name="home"),
    path("hello/", HelloView.as_view(), name="hello"),
]