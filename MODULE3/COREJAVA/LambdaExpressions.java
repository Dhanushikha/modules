import java.util.*;

public class LambdaExpressions {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("banana", "apple", "cherry", "date");
        Collections.sort(list, (s1, s2) -> s1.compareTo(s2));
        System.out.println("Sorted list: " + list);
    }
}