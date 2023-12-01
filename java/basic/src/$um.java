import java.util.Scanner;
class GFG {

    public static void main(String[] args)
    {

        Scanner sc= new Scanner(System.in);
        String str=sc.nextLine();
        switch (str) {

            // Case 1
            case "one":

                System.out.println("one");

                break;

            // Case 2
            case "two":

                System.out.println("two");
                break;

            // Case 3
            case "three":

                System.out.println("three");
                break;

            default:

                System.out.println("no match");
                sc.close();
        }
    }
}

