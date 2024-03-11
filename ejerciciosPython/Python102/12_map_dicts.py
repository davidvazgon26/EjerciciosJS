items = [
    {
        'product':'camisa',
        'price':100
    },
    {
        'product':'jeans',
        'price':350
    },
    {
        'product':'blouse',
        'price':400
    }
]

prices = list(map( lambda item: item['price'], items))
print(prices)

def add_taxes(item):
    new_item = item.copy()  ## Se agrega esto para evitar modificar el array original por referencia.
    new_item['taxes'] = new_item['price']*.16
    return new_item

new_items = list(map(add_taxes, items))
print(new_items)


.
