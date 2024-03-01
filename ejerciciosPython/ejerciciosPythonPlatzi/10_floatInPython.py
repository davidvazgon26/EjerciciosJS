x=3.3
y= 1.1+2.2

print(x)
print(y)
print(x==y)

y_str = format(y,".2g")
print("str =>", y_str)
print(y_str == str(x))


print("*" * 20)

tolerance = 0.000001

print(abs(x-y)< tolerance)