from django.contrib.auth.models import User,Group
from django.contrib.auth.forms import UserCreationForm

class RegistroForm(UserCreationForm):
    grupos = Group.objects.all()

    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'email',
            'groups',
            

        ]
        labels = {
            'username':'nombre de usuario',
            'first_name':'nombre/s',
            'last_name': 'apellido/s',
            'email': 'correo',
            'groups':'groups',
        }