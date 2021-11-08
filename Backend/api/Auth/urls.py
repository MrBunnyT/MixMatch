from django.urls import path
from .views import GoogleOAuth2

urlpatterns = [
    # Social Login Patterns
    path('Google/', GoogleOAuth2.as_view(), name='google_login')
]