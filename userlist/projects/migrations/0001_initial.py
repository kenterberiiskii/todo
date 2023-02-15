# Generated by Django 4.1.4 on 2023-01-29 07:41

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('prj_name', models.CharField(max_length=64, unique=True)),
                ('prj_link', models.CharField(max_length=128)),
                ('prj_users', models.CharField(max_length=64)),
            ],
        ),
    ]
