from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class RegistroForm(UserCreationForm):
    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'email',

        ]
        labels = {
            'username':'nombre de usuario',
            'first_name':'nombre/s',
            'last_name': 'apellido/s',
            'email': 'correo',
        }