from django.shortcuts import render


# Página inicial - Dashboard
def inicio(request):
    return render(request, 'dashboard/index.html')


# Página de gerenciamento de alunos
def alunos(request):
    return render(request, 'dashboard/alunos.html')


# Página de matrículas
def matriculas(request):
    return render(request, 'dashboard/pagina.html', {
        'titulo': 'Matrículas'
    })


# Página financeira
def financeiro(request):
    return render(request, 'dashboard/pagina.html', {
        'titulo': 'Financeiro'
    })


# Página de treinos
def treinos(request):
    return render(request, 'dashboard/pagina.html', {
        'titulo': 'Treinos'
    })


# Página de produtos
def produtos(request):
    return render(request, 'dashboard/pagina.html', {
        'titulo': 'Produtos'
    })


# Página de relatórios
def relatorios(request):
    return render(request, 'dashboard/pagina.html', {
        'titulo': 'Relatórios'
    })


# Página de matrículas
def matriculas(request):
    return render(request, 'dashboard/matriculas.html')


# Página de configurações
def configuracoes(request):
    return render(request, 'dashboard/pagina.html', {
        'titulo': 'Configurações'
    })