#! /usr/bin/env bash
#echo "Hello world"



lflf
#This is a comment

#echo "Bye"


#Variables

myvar=hello

myvar2="Mi variable 2"

varnumber=26

echo $myvar

myvar="cambio el texto"

echo intento cambiar la variable myvar:  $myvar

echo $myvar2

echo $varnumber

# Variables-constantes

declare -r myname="David"

echo $myname

myname="No se puede cambiar"

echo intento cambiar la variable myname: $myname

# declare con -l por lowercase

declare -l lowerstring="This is some TEXT!"

echo "El valor de la variable lowerstring es: $lowerstring"

lowerstring="Cambie el VALOR!"

echo "Ahora el valor de la variable lowerstring es: $lowerstring"

# decalre con -u para uppercase

declare -u upperstring="This os some TEXT!!"

echo "El valor de la variable upperstring es: $upperstring"

upperstring="Estos CAMBIANDO el Valor!!!"

echo "Ahora el valor de la variable upperstring es: $upperstring"

echo "Id de proceso de shell = $$"

echo "Nombre del programa = $0"

echo "Otra vez el nombre del programa = 0"

echo "Numero de argumentos $#"

echo "Argumento 1 = $1"

echo "Argumento 2 = $2"

echo "Lista completa de argumentos $*"

echo "Lista completa de argumentos $@"

echo "Este que hace? $f"
