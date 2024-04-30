from django.contrib import admin
from django.urls import path,include
from aeropage import views

urlpatterns = [
    path('admin/', admin.site.urls),

    path("__reload__/", include("django_browser_reload.urls")),

    #Landing Demo
    path('',views.index,name="index"),
    path('agency',views.agency,name="agency"),
    path('agency2',views.agency2,name="agency2"),
    path('charity',views.charity,name="charity"),
    path('company',views.company,name="company"),
    path('creative',views.creative,name="creative"),
    path('ebook',views.ebook,name="ebook"),
    path('finance',views.finance,name="finance"),
    path('hosting',views.hosting,name="hosting"),
    path('marketing',views.marketing,name="marketing"),
    path('marketing2',views.marketing2,name="marketing2"),
    path('marketing3',views.marketing3,name="marketing3"),
    path('photography',views.photography,name="photography"),
    path('portfolio',views.portfolio,name="portfolio"),
    path('portfolio2',views.portfolio2,name="portfolio2"),
    path('startup',views.startup,name="startup"),
    path('webdesigner',views.webdesigner,name="webdesigner"),

    #Admin Demo
    path('admindashboard',views.admindashboard,name="admindashboard"),
    path('adminchat',views.adminchat,name="adminchat"),
    path('adminproject',views.adminproject,name="adminproject"),
    path('admincomponents',views.admincomponents,name="admincomponents"),

    #Security
    path('auth-login',views.authlogin,name="authlogin"),
    path('auth-register',views.authregister,name="authregister"),
    path('auth-logout',views.authlogout,name="authlogout"),
    path('auth-recoverpw',views.authrecoverpw,name="authrecoverpw"),
    path('auth-reset-password',views.authresetpassword,name="authresetpassword"),

]
