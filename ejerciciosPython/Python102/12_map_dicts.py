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
    item['taxes'] = item['price']*.16
    return item

new_items = list(map(add_taxes, items))
print(new_items)