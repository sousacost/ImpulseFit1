
from django.shortcuts import render


# Página inicial - Dashboard
def inicio(request):
    return render(request, 'dashboard/index.html')


# Página de gerenciamento de alunos
def alunos(request):
    return render(request, 'dashboard/alunos.html')
