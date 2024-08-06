# Generated by Django 5.0.7 on 2024-08-04 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=127, verbose_name='Название')),
                ('description', models.CharField(max_length=511, verbose_name='Описание')),
                ('price', models.IntegerField(verbose_name='Цена')),
                ('photo_small', models.ImageField(upload_to='', verbose_name='Маленькое фото')),
                ('photo_big', models.ImageField(upload_to='', verbose_name='Большое фото')),
            ],
        ),
    ]
