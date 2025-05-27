public class MethodOverloading {
    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println("Sum of 2 integers: " + add(10, 20));
        System.out.println("Sum of 2 doubles: " + add(10.5, 20.3));
        System.out.println("Sum of 3 integers: " + add(5, 10, 15));
    }
}