from django.shortcuts import render, get_object_or_404, redirect
from django.core.mail import send_mail
from googlevoice import Voice


def base(request):
    template = 'base.html'
    return render(request, template)


def navbar(request):
    template = 'navbar.html'
    return render(request, template)


def signup(request):
    template = 'signup.html'
    return render(request, template)


def send_message(user, password, number, message):
    voice = Voice()
    voice.login(user, password)
    voice.send_sms(number, message)


def send_mail_text(subject, message, from_email, to_email):
    send_mail(subject, message, from_email, to_email)

