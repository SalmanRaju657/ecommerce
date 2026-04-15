from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Product

@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_products(request):

    # GET → fetch products
    if request.method == 'GET':
        products = Product.objects.all().values()
        return Response(products)

    # POST → add product
    if request.method == 'POST':
        data = request.data
        Product.objects.create(
            name=data['name'],
            price=data['price']
        )
        return Response({"message": "Product added"})

    # DELETE → delete product
    if request.method == 'DELETE':
        product_id = request.data.get('id')
        Product.objects.filter(id=product_id).delete()
        return Response({"message": "Product deleted"})