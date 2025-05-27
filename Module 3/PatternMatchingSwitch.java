public class PatternMatchingSwitch {
    public static void main(String[] args) {
        Object[] testObjects = { 42, "Hello", 3.14, true, 123L, null };

        for (Object obj : testObjects) {
            System.out.println(describeObject(obj));
        }
    }

    public static String describeObject(Object obj) {
        return switch (obj) {
            case Integer i -> "Integer with value: " + i;
            case String s -> "String with value: " + s;
            case Double d -> "Double with value: " + d;
            case Boolean b -> "Boolean with value: " + b;
            case Long l -> "Long with value: " + l;
            case null -> "Null value received";
            default -> "Unknown type: " + obj.getClass().getName();
        };
    }
}
