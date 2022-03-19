from django.shortcuts import render
from core.models import Artist
from django.template.loader import render_to_string
from django.http import JsonResponse
from scrap.script import getlist

from django.templatetags.static import static
from django.urls import reverse
from django.views.generic import TemplateView

from rest_framework import serializers
from rest_framework.renderers import JSONRenderer

import json

from . import version
# Create your views here.


def home(request):

    search_query = request.GET.get('search', '')
    print(search_query)
    if len(search_query)>0:
        getresult = getlist(search_query)
        print(getresult)
        #data = serializers.serialize('json', getresult)
        #return render(request, 'home.html', {"results": getresult})
        return JsonResponse(json.dumps(getresult), safe=False)
        #return JSONRenderer().render(getresult)
        #return Response(getlist(search_query))
    return render(request, 'home.html')





def article(request):

    if request.method == 'GET':
        articles

    # data = College.objects.get(id=id)  # fetch one , fetch one etc....

    # form = CollegeForm(instance=data)  # instance=data = gives previes data pre filled inside form
    # if request.method == 'POST':
    #     form = CollegeForm(request.POST, instance=data)
    #     if form.is_valid():
    #         clg = College()
    #         clg.id = id  # very must otherwise duplicate will be created
    #         clg.clg_name = form.cleaned_data['clg_name']
    #         clg.clg_email = form.cleaned_data['clg_email']
    #         clg.clg_address = form.cleaned_data['clg_address']
    #         clg.save()
    #         return redirect(index)
    #
    # return render(request, 'update.html', {'form': form})

def artists_view(request):
    ctx = {}
    url_parameter = request.GET.get("q")
    
    search_query = request.GET.get('search', '') #
    if len(search_query)>0:
        getresult = getlist(search_query)
        print(getresult) #

    if url_parameter:
        artists = Artist.objects.filter(name__icontains=url_parameter)
    else:
        artists = Artist.objects.all()

    ctx["artists"] = artists
    if request.is_ajax():

        html = render_to_string(
            template_name="artists-results-partial.html", context={"artists": artists}
        )
        data_dict = {"html_from_view": html}
        return JsonResponse(data=data_dict, safe=False)

    return render(request, "artists.html", context=ctx)

class ServiceWorkerView(TemplateView):
    template_name = 'sw.js'
    content_type = 'application/javascript'
    name = 'sw.js'

    def get_context_data(self, **kwargs):
        return {
            'version': version,
            'icon_url': static('icons/aurss.512x512.png'),
            'manifest_url': static('manifest.json'),
            'style_url': static('main.css'),
            'home_url': reverse('home'),
            'offline_url': reverse('home'),
        }