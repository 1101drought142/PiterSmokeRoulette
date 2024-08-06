from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=127, verbose_name="Название")
    description = models.CharField(max_length=511, verbose_name="Описание")
    price = models.IntegerField(verbose_name="Цена")
    photo_small = models.ImageField(verbose_name="Маленькое фото")
    photo_big = models.ImageField(verbose_name="Большое фото")

class Client(models.Model):
    tg_id = models.CharField(max_length=255, verbose_name="Id клиента в телеграмм")
    balance = models.IntegerField(default=0, verbose_name="Баланс клиента")
    lost_money = models.IntegerField(verbose_name="Проигранная сумма")
    won_money = models.IntegerField(verbose_name="Выйгранная сумма")

class Game(models.Model):
    user = models.ForeignKey(Client, on_delete=models.CASCADE)
    result = models.BooleanField()
    prize = models.ForeignKey(Item, null=True, blank=True, on_delete=models.SET_NULL)
     