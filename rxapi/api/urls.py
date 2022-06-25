from django.urls import path
from . import views
urlpatterns = [
    path("greet/", views.hello),
    path("getTweets/<str:category>", views.getRecentTweets),
    path("getTwitterUser/<str:id>", views.getTwitterUser),
    path("newUser/", views.storeUser),
    path("getUser/", views.getUserDetails),
    path("updateUser/", views.updateUser)
]