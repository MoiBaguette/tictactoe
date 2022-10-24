import java.util.Random;
import java.util.Scanner;

public class Controller {
    private Board board = new Board();
    private Show show = new Show();

    private Ai ai = new Ai();

    private int player;//which stone is the player using
    private int computer;//which stone is the computer using

    private int checkW;
    int currentPlayer;
    public void start() {
        /*Menu*/
        boolean state = true;
        checkW = 2;
        while(state){
            show.setUp();
            Scanner in = new Scanner(System.in);
            if(in.nextInt() == 1) {
                startGame();
            }
            else if(in.nextInt() == 2) {
                show.instructions();
            }
            else if(in.nextInt() == 9)
                state = false;
        }
    }

    private void startGame(){
        whoGoesFirst();
        while(gameLoop(board, show));
    }
    private boolean gameLoop(Board board, Show show){
        /*Game loop function*/
        if (currentPlayer == 0){
            show.playerTurn();
            if(makeMove(board))
                currentPlayer = 1;
            show.boardToConsole(board);
        }else{
            show.aiTurn();
            ai.turn(board, computer);
            show.boardToConsole(board);
            currentPlayer = 0;
        }
        /*check for Wins or EndGame*/
        checkW = board.checkWinner();
        if(checkW == 0) {
            if(player == 0)
                show.victory();
            if(computer == 0)
                show.loss();
            return false;
        } else if (checkW == 1){
            if(player == 0)
                show.loss();
            if(computer == 0)
                show.victory();
            return false;
        } else {
            if(board.endGame()){
                show.draw();
                return false;
            }
        }
        return true;
    }

    private void whoGoesFirst(){
        /*Randomly assigns 0 or 1 to var rn, which then decides value for the player and computer.*/
        Random random = new Random();
        int rn =  random.nextInt(2);
        currentPlayer = rn;
        if(rn == 1){
            player = 0;
            computer = 1;
        }else{
            player = 1;
            computer = 0;
        }
    }
    private boolean makeMove(Board board){
        /*take a position from console, asks board if this is a valid move.
        * if not valid return false so the loop asks for a valid move again*/
        Scanner scanner = new Scanner(System.in);
        int position = scanner.nextInt();
        if(board.setAtPos(position, player))
            return true;
        else
            return false;
    }
}
