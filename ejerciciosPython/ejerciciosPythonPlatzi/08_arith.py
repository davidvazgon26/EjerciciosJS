a = 10
b = 3

print(f"suma: {a + b}") #suma de variables
print(f"resta: {a - b}") #resta de variables
print(f"multiplicacion: {a * b}") #multiplicacion de variables
print(f"division: {a / b}") #division de variables
print(f"division entera: {a // b}") #no regresa el residuo de la division, solo regresa el numero entero
print(f"modulo: {a % b}") #residuo de la division de variables
print(f"exponente: {a ** b}") #exponente de variables

print(f"Jerarquiaa: {a ** b + b - (a ** a / b) // a}") #el orden de las operaciones es el mismo que en matematicas

# 1)parentesis
# 2)exponente
# 3)multiplicacion y division
# 4)suma y resta
# 5)izquierda a derecha