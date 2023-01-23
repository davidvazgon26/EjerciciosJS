package EjerciciosPOO.JavaCollections.src.mx.com.alura.model;

public class Aula{
    private String nombre;
   
    public Aula(String nombre) {
        this.nombre = nombre;
    }


    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
   
    //Otro ejemplo de como y porque sobreescribir el metodo to string, si no lo hago solo veremos en consola la referencia al objeto.
    @Override
    public String toString(){
        return this.nombre;
    }    
}
