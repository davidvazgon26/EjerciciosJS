price = 100

def increment():
    price = 200
    result = price * 1.16
    return result

print(price)
print(increment())
# print(result) # NameError: name 'result' is not defined (for the scope)