from django.conf.urls import url
from django.contrib import admin
from . import views
urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'', views.navbar, name='home'),
    url(r'^signup/', views.signup, name='signup'),
]
