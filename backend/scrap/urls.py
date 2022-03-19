from django.urls import path
from scrap import views


urlpatterns =[

    path('/search', views.search, name='search'),
    path('/results', views.results, name='result'),
]
