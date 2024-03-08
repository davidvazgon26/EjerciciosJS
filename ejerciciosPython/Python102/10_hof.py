def increment(x):
    return x+1

def high_ord_func(x,func):
    return x + func(x)

result = high_ord_func(2, increment)
print("The result for hof is: ", result) 

# HOF con lambda
increment_V2 = lambda x: x+1
high_ord_func_V2 = lambda x, func: x + func(x)

result2 = high_ord_func_V2(7, increment_V2)
print("The result for hof with lambda is: ", result2)

# Other with lambda
result3 = high_ord_func_V2(9, lambda x: x+3)
print(result3)