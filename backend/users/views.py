from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.contrib.auth import get_user_model

import requests
# Create your views here.


class UserList(generics.ListAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class Register(generics.GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        response = Response({
            'message': 'successfully registered user',
        })

        return response


class Login(generics.GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

        email = serializer.validated_data.get('email')
        password = serializer.validated_data.get('password')

        if not user:
            response = Response({
                'message': 'user does not exist'
            })
            return response

        response_auth_token_obtain = requests.post(
            'http://localhost:8000/api/auth/token/obtain/',
            data={
                'email': email,
                'password': password,
            }
        )

        response = Response({
            'user': UserSerializer(
                user,
                context=self.get_serializer_context()
            ).data,
            'message': 'successful user sign-in',
        })

        response.set_cookie(
            key='userAccessToken',
            value=response_auth_token_obtain.json().get('access'),
            path='/',
            httponly=True,
            secure=True,
            samesite='None'
        )
        response.set_cookie(
            key='userRefreshToken',
            value=response_auth_token_obtain.json().get('refresh'),
            path='/',
            httponly=True,
            secure=True,
            samesite='None'
        )
        response.headers['Access-Control-Allow-Credentials'] = True
        response.headers['Access-Control-Allow-Origin'] = '*'

        return response
