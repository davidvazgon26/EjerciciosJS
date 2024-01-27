File files = new File('/mnt/c/Users/david/Desktop/EjerciciosVarios/EjerciciosGroovy')

File file = new File('/mnt/c/Users/david/Desktop/EjerciciosVarios/EjerciciosGroovy/Readme.md')

//No era la ruta de windows, era la de linux
//C:\Users\david\Desktop\EjerciciosVarios\EjerciciosGroovy
//'C:/Users/david/Desktop/EjerciciosVarios/EjerciciosGroovy/Readme.md'

files.eachFile{println it.name}

println('**************Otra forma**************************')

println files.list()

println('**************Leer un archivo**************************')

file.eachLine{
    println it 
}