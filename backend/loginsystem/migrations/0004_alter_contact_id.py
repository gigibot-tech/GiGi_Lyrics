# Generated by Django 3.2.9 on 2021-11-14 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loginsystem', '0003_auto_20190808_2316'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
