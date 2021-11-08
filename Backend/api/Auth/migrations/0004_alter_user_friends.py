# Generated by Django 3.2.6 on 2021-08-11 20:03

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Auth', '0003_auto_20210812_0009'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='friends',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL, verbose_name="User's Friends"),
        ),
    ]
