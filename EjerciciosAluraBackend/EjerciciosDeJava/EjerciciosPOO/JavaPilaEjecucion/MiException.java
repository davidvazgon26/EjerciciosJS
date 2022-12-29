package EjerciciosPOO.JavaPilaEjecucion;

public class MiException extends Exception{ //checked, verificada por el compilador a nivel del codigo de manera obligatoria
// public class MiException extends RuntimeException{ //unchecked
    
    public MiException(){
        super();
    }

    public MiException(String message){
        super(message);
    }
}
