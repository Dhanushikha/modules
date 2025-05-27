import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        String input;
        System.out.println("Enter student names (type 'exit' to finish):");
        while (!(input = scanner.nextLine()).equalsIgnoreCase("exit")) {
            names.add(input);
        }
        System.out.println("Student names:");
        for (String name : names) {
            System.out.println(name);
        }
        scanner.close();
    }
}