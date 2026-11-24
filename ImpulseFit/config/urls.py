from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from dashboard import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.inicio, name='inicio'),
    path('alunos/', views.alunos, name='alunos'),
    path('matriculas/', views.matriculas, name='matriculas'),
    path('financeiro/', views.financeiro, name='financeiro'),
    path('treinos/', views.treinos, name='treinos'),
    path('produtos/', views.produtos, name='produtos'),
    path('relatorios/', views.relatorios, name='relatorios'),
    path('configuracoes/', views.configuracoes, name='configuracoes'),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL,
        document_root=settings.BASE_DIR / 'dashboard' / 'static'
    )