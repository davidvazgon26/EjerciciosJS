package EjerciciosPOO.projectbytebank;

public class testReferenciaObj {
    public static void main(String[] args) {
        Cliente david = new Cliente();
        david.setNombre( "David Vazquez");
        david.setNombre("dfghgjm656");
        david.setTelefono("461684541");


        Cuenta cuentaDavid = new Cuenta(16,18);
        cuentaDavid.depositar(1200);;
        cuentaDavid.setTitular(david);

        System.out.println(cuentaDavid.getTitular().getNombre());
        // Demostracion de que se ligo la referencia 
        System.out.println(cuentaDavid.getTitular());
        System.out.println(david); //titular y david tiene la misma referencia en memoria
    }
}
