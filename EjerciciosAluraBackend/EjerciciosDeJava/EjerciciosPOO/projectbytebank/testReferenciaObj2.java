package EjerciciosPOO.projectbytebank;

public class testReferenciaObj2 {
    public static void main(String[] args) {
        Cuenta cuentaDavid = new Cuenta(123,33);
        Cliente cliente = new Cliente();
        cliente.setNombre("David A V set");
        cuentaDavid.setTitular(cliente);

        System.out.println(cliente);
        System.out.println(cuentaDavid);
        System.out.println(cuentaDavid.getTitular());        

        System.out.println(cliente.getNombre());
        System.out.println(cuentaDavid.getTitular().getNombre());
    }
}
