from django.shortcuts import render


def index(request):
    return render(request,"index/index.html")

def agency(request):
    return render(request,"agency/index.html")

def agency2(request):
    return render(request,"agency2/index.html")

def charity(request):
    return render(request,"charity/index.html")

def company(request):
    return render(request,"company/index.html")

def creative(request):
    return render(request,"creative/index.html")

def ebook(request):
    return render(request,"ebook/index.html")

def finance(request):
    return render(request,"finance/index.html")

def hosting(request):
    return render(request,"hosting/index.html")

def marketing(request):
    return render(request,"marketing/index.html")

def marketing2(request):
    return render(request,"marketing2/index.html")

def marketing3(request):
    return render(request,"marketing3/index.html")

def photography(request):
    return render(request,"photography/index.html")

def portfolio(request):
    return render(request,"portfolio/index.html")

def portfolio2(request):
    return render(request,"portfolio2/index.html")

def startup(request):
    return render(request,"startup/index.html")

def webdesigner(request):
    return render(request,"webdesigner/index.html")

def admindashboard(request):
    return render(request,"admindashboard/dashboard.html")

def adminchat(request):
    return render(request,"adminDashboard/chat.html")

def adminproject(request):
    return render(request,"adminDashboard/project.html")

def admincomponents(request):
    return render(request,"adminDashboard/components.html")

def authlogin(request):
    return render(request,"security/auth-login.html")

def authregister(request):
    return render(request,"security/auth-register.html")

def authlogout(request):
    return render(request,"security/auth-logout.html")

def authrecoverpw(request):
    return render(request,"security/auth-recoverpw.html")

def authresetpassword(request):
    return render(request,"security/auth-reset-password.html")