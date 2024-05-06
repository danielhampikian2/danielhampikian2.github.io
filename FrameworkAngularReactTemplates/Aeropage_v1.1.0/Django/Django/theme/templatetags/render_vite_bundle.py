import json
import os
import socket

from django import template
from django.templatetags.static import static
from django.utils.safestring import mark_safe
from django.conf import settings

register = template.Library()
from django.contrib.staticfiles import finders


# In Early Stage Development
def is_vite_live():
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        res = sock.connect_ex(('localhost', 3000))
        return res == 0
    except:
        return False


def is_vite_built():
    return finders.find('dist/.vite/manifest.json') is not None


def check_key(object, key):
    try:
        exists = object[key]
        return True
    except:
        return False


def find_from_vite_manifest(file_name):
    with open(os.path.join(settings.BASE_DIR, 'theme/static/dist/.vite/manifest.json')) as file:
        file = json.load(file)
    try:
        return file[file_name]
    except AttributeError:
        return None


@register.simple_tag
def render_vite_bundle(value):
    if is_vite_live():
        return mark_safe(f'<script type="module" src="http://localhost:3000/{value}"></script>')
    file_name = find_from_vite_manifest(file_name=value)

    if file_name:
        file = file_name['file']
        url = '<script type="module"  src="{url}"></script>'.format(url=static('dist/' + file))
        if check_key(file_name, 'css'):
            css = file_name['css']
            url += ('<link rel="stylesheet" type="text/css" href="{url}" />'.format(url=static('dist/' + css[0])))
        return mark_safe(url)

    raise Exception('You need to run `yarn build` command or please check file path of ' + value)
