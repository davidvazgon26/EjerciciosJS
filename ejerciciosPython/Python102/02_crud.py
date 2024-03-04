set_countries = {'Colombia', 'Mexico','Bolivia'}

print(len(set_countries))

print('Colombia' in set_countries)
print('Peru' in set_countries)

#add
set_countries.add('Peru')
set_countries.add('Peru')
print('Peru' in set_countries)
print(set_countries)

#update
set_countries.update({'Argentina','Ecuador','Peru'})
print("Update set: ", set_countries)

#remove
set_countries.remove('Argentina')
print("remove one of set: ", set_countries)

 ## set_countries.remove('Argentina')
 ## print("remove again argentina: ", set_countries) ##KeyError: 'Argentina'

#  set_countries.discard('Ecuador')
#  print("Discard Argentina: ", set_countries)


## limpiar el conjunto 

set_countries.clear()
print(set_countries)



