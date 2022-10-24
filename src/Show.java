import java.sql.SQLData;
import java.util.Scanner;
public class Show {
    char charBoard[] = new char[9];
    public Show(){
        for(int i = 0; i < 9; i++){
            this.charBoard[i] = ' ';
        }
    }

    public void boardToConsole(Board board){
        for(int i = 0; i < 9; i++){
            if(board.getValueAt(i) == 0)
                this.charBoard[i] = 'O';
            else if (board.getValueAt(i) == 1) {
                this.charBoard[i] = 'X';
            }
        }
        for(int i = 0; i < 9; i++){
            System.out.print(charBoard[i]);
            if((i+1)%3 == 0)
                System.out.println();
            else
                System.out.print("|");
        }
    }

    public void setUp() {
        System.out.print("To play a game of Eieren, kaas & boter vs the computer. Press 1 and enter.\n");
        System.out.print("For instructions on how to play. Press 2 and enter.\n");
        System.out.print("To Exit this program. Press 9 and enter.\n");
    }

    public void instructions(){
        System.out.print("Welcome to Eieren, kaas & boter.\n" +
                "To play enter first the position and press enter.\n" +
                "The positions are as follows.\n");
        char instruction[] = {'0','1','2','3','4','5','6','7','8'};
        for(int i = 0; i < 9; i++){
            System.out.print(instruction[i]);
            if((i+1)%3 == 0)
                System.out.println();
            else
                System.out.print("|");
        }
        System.out.print("\nTo return to the main menu press 1 and enter");
        while(exitInstructions());
        clearConsole();
    }
    private boolean exitInstructions(){
        Scanner in = new Scanner(System.in);
        if(in.nextInt() == 1)
            return false;
        return true;
    }
    public void victory(){
        System.out.print("A win!\n");
    }
    public void draw(){
        System.out.print("A draw.\n");
    }
    public void loss(){
        System.out.print("A loss.\n");
    }
    public void playerTurn(){
        System.out.print("It is your turn. Please input the position.\n");
    }
    public void aiTurn(){
        System.out.print("The computer made a move.\n");
    }

    public void clearConsole()
    {
        //this is where I would clear the console if I knew how to do that...
    }
}
