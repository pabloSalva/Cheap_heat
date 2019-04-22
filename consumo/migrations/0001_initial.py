# Generated by Django 2.2 on 2019-04-10 01:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True
    atomic  = False

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='EntidadElectrica',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=30)),
                ('tipo_entidad', models.CharField(default='electrica', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Provincia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_provincia', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='TarifasElectricas',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fech_ini', models.DateField()),
                ('fech_fin', models.DateField()),
                ('precioKwh', models.FloatField(default=0)),
                ('codigo', models.CharField(max_length=20)),
                ('desde', models.IntegerField(default=0)),
                ('hasta', models.IntegerField(default=0)),
                ('cargofijo', models.IntegerField(default=0)),
                ('tipo_tarifa', models.CharField(default='residencial', max_length=20)),
                ('entidad', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='consumo.EntidadElectrica')),
            ],
        ),
        migrations.CreateModel(
            name='Partido',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_partido', models.CharField(max_length=20)),
                ('provincia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='consumo.Provincia')),
            ],
        ),
        migrations.CreateModel(
            name='Localidad',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_localidad', models.CharField(max_length=20)),
                ('partido', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='consumo.Partido')),
            ],
        ),
        migrations.AddField(
            model_name='entidadelectrica',
            name='localidades',
            field=models.ManyToManyField(to='consumo.Localidad'),
        ),
        migrations.AddField(
            model_name='entidadelectrica',
            name='users',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='Artefacto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_artefacto', models.CharField(max_length=20)),
                ('consumo', models.FloatField(default=0)),
                ('eficiencia', models.CharField(max_length=4)),
                ('descripcion', models.CharField(max_length=20)),
                ('marca', models.CharField(default='S/N', max_length=20)),
                ('modelo', models.CharField(default='S/N', max_length=20)),
                ('tipo', models.CharField(max_length=20)),
                ('users', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
