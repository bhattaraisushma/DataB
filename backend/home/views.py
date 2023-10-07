# Rest Framework
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response

from typing import Mapping

class HomeView(APIView):
    """
    Home view for the API.
    """

    # Makes so that this view doesn't require authentication
    authentication_classes = []
    permission_classes = []

    def get(self, request: Request) -> Response:
        """
        GET request to the home view.
        """
        return Response(
            data={
                "message": "Welcome to the Dataset API!",
            },
            status=status.HTTP_200_OK,
        )
    
class HelloView(APIView):
    """
    Hello view for the API.
    """

    def get(self, request: Request) -> Response:
        """
        GET request to the hello view.
        """
        return Response(
            data={
                "message": "Hello, world!",
            },
            status=status.HTTP_200_OK
        )
