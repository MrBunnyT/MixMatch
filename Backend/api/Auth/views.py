from allauth.account import adapter
from django.shortcuts import render
from rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.twitter.views import TwitterOAuthAdapter

class GoogleOAuth2(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = "https://localhost:8000/Auth/GoogleOAuth2"

class TwitterOAuth2(TwitterOAuthAdapter):
    adapter_class = TwitterOAuthAdapter
    callback_url = "https://localhost:8000/Auth/TwitterOAuth2"