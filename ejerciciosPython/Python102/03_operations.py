set_a = {'col','mex','bol'} 
set_b = {'per','bol'}

set_c = set_a.union(set_b)
print(set_c)
print(set_a|set_b) ## es lo mismo

set_c = set_a.intersection(set_b)
print(set_c)
print(set_a & set_b)


set_c = set_a.difference(set_b)
print(set_c)
print(set_a - set_b)

set_c = set_a.symmetric_difference(set_b)
print(set_c)
print(set_a^set_b)

# Set operations

# union(set): Realiza la operacion “union” entre dos conjuntos. 
# La unión entre dos conjuntos es sumar los elementos de estos sin repetir elementos. 
# Esta operación tambien se puede realizar con el signo “|”: set_a | set_b.
# intersection(set): Realiza la operacion “intersection” entre dos conjuntos. 
# La intersección entre dos conjuntos es tomar unicamente los elementos en común de los conjuntos. 
# Esta operación tambien se puede realizar con el signo “&”: set_a & set_b.
# difference(set): Realiza la operacion “difference” entre dos conjuntos. 
# La diferencia entre dos conjuntos es restar los elementos del segundo conjuntos al primero. 
# Esta operación tambien se puede realizar con el signo “-”: set_a - set_b.
# symmetric_difference(set): Realiza la operacion “symmetric_difference” entre dos conjuntos. 
# La diferencia simetrica entre dos conjuntos const de restar todos los elementos de ambos exceptuando el elemento en común. 
# Esta operación tambien se puede realizar con el signo “^”: set_a ^ set_b.
# NOTA: No se pueden realizar operaciones con otras colecciones de datos, solo se puede únicamente entre conjuntos.

