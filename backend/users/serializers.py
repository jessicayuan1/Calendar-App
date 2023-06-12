from rest_framework import serializers
from django.contrib.auth import authenticate, get_user_model


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = [
            'id',
            'email',
            'is_staff',
            'is_active',
        ]


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            validated_data['email'], validated_data['password'])

        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=128, write_only=True)

    def validate(self, data):
        email = data.get('email', None)
        password = data.get('password', None)
        if email and password:

            user = authenticate(username=email, password=password)
            if user:
                data['user'] = user

            data['user'] = user
        return data
