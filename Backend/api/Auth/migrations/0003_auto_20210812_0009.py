# Generated by Django 3.2.6 on 2021-08-11 18:39

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Auth', '0002_auto_20210812_0002'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='DOB',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='friends',
            field=models.ManyToManyField(null=True, to=settings.AUTH_USER_MODEL, verbose_name="User's Friends"),
        ),
        migrations.AlterField(
            model_name='user',
            name='middle_name',
            field=models.CharField(max_length=26, null=True),
        ),
    ]
