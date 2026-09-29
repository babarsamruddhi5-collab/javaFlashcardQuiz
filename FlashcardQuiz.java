
import java.util.Scanner;
import java.util.ArrayList;

class Flashcard {
    String question;
    String[] options;
    int correctAnswer;

    Flashcard(String question, String[] options, int correctAnswer) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    void displayQuestion(int number) {
        System.out.println("\nQuestion " + number + ": " + question);

        for (int i = 0; i < options.length; i++) {
            System.out.println((i + 1) + ". " + options[i]);
        }
    }

    boolean checkAnswer(int answer) {
        return answer == correctAnswer;
    }
}

public class FlashcardQuiz {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<Flashcard> flashcards = new ArrayList<>();

        flashcards.add(new Flashcard(
            "Which language is used for Android development?",
            new String[]{"Java", "HTML", "CSS", "SQL"}, 1
        ));

        flashcards.add(new Flashcard(
            "Which keyword is used to create a class in Java?",
            new String[]{"function", "class", "define", "create"}, 2
        ));

        flashcards.add(new Flashcard(
            "Which method is the entry point of a Java program?",
            new String[]{"start()", "run()", "main()", "init()"}, 3
        ));

        flashcards.add(new Flashcard(
            "Which data type stores true or false?",
            new String[]{"int", "String", "boolean", "char"}, 3
        ));

        flashcards.add(new Flashcard(
            "Which symbol ends a Java statement?",
            new String[]{":", ";", ".", ","}, 2
        ));

        System.out.println("==================================");
        System.out.println("       JAVA FLASHCARD QUIZ");
        System.out.println("==================================");

        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        int score = 0;

        System.out.println("\nWelcome, " + name + "!");
        System.out.println("Answer the following questions.");
        System.out.println("Enter option number (1-4).");

        for (int i = 0; i < flashcards.size(); i++) {
            Flashcard card = flashcards.get(i);

            card.displayQuestion(i + 1);

            int answer;

            while (true) {
                System.out.print("Your answer: ");

                if (sc.hasNextInt()) {
                    answer = sc.nextInt();

                    if (answer >= 1 && answer <= 4) {
                        break;
                    }
                } else {
                    sc.next();
                }

                System.out.println("Please enter a number from 1 to 4.");
            }

            if (card.checkAnswer(answer)) {
                System.out.println("Correct answer!");
                score++;
            } else {
                System.out.println("Incorrect answer.");
                System.out.println(
                    "Correct answer: " +
                    card.options[card.correctAnswer - 1]
                );
            }
        }

        double percentage =
            (score * 100.0) / flashcards.size();

        System.out.println("\n==================================");
        System.out.println("           QUIZ RESULT");
        System.out.println("==================================");
        System.out.println("Student Name: " + name);
        System.out.println("Total Questions: " + flashcards.size());
        System.out.println("Correct Answers: " + score);
        System.out.println("Wrong Answers: " +
                           (flashcards.size() - score));
        System.out.printf("Percentage: %.2f%%%n", percentage);

        if (percentage >= 80) {
            System.out.println("Result: Excellent!");
        } else if (percentage >= 60) {
            System.out.println("Result: Good Job!");
        } else if (percentage >= 40) {
            System.out.println("Result: Keep Practicing!");
        } else {
            System.out.println("Result: Try Again!");
        }

        System.out.println("\nThank you for playing, " + name + "!");

        sc.close();
    }
}