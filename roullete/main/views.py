from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = "index.html"

class ItemView(TemplateView):
    template_name = "item.html"
