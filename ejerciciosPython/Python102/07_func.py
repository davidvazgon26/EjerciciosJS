

def calculate(a=2,b=3):
    result = {
        "sum": a+b,
        "multi": a*b,
        "rest": a-b
    }    
    return result

response = calculate()
print(response)

response2 = calculate(8,3)
print(response2)

def find_volume(length, width, depth):
    return length*width*depth,  width, "this is my result"

result = find_volume(2,3,8)
print(result)

result2,  myWidth, myText = find_volume(4,3,9)
print(result2)
print(myWidth)
print(myText)