import java.util.Scanner;

public class Controller {
    private String playerName = "Gerco2";
    private Board board = new Board();
    private Show show = new Show();
    private Ai ai = new Ai();
    private Connect connect = new Connect("localhost", 7789);
    private Parser parse = new Parser(playerName);
    private int playerPiece;//which piece is the player using
    private int opponentPiece;//which piece is the computer using
    private int checkW;
    private int currentPlayer;
    public void start() {
        /*Menu*/
        boolean state = true;
        checkW = 2;
        while (state) {
            Scanner in = new Scanner(System.in);
            show.setUp();
            switch (in.nextInt()) {
                case 1:
                    System.out.println("1");
                    break;
                case 2:
                    System.out.println("2");
                    show.instructions();
                    break;
                case 3:
                    System.out.println("3");
                    startTournament();
                    break;
                case 9:
                    state = false;
                    break;
                default:
                    System.err.println("Unrecognized option");
            }
        }
    }

    private void startTournament() {
        System.out.println(connect.getReply());//flush welcome
        System.out.println(connect.getReply());
        connect.setCommand(String.format("login %s", playerName));
        String serverMsg;
        while((serverMsg = connect.getReply()) == null){}//wait for reply
        System.out.println(serverMsg);//print reply

        while(true){//wait for match
            serverMsg = connect.getReply();
            if(serverMsg != null){//if incoming parse msg
                parse.parse(serverMsg);
            }
            if(parse.getStatus()){
                whoGoesFirst();
                gameLoop();
            }

        }
    }

    private void whoGoesFirst(){
        if(parse.getToMove() == true){
            playerPiece = 1;
            currentPlayer = 1;
            opponentPiece = 0;
        }else{
            playerPiece = 0;
            currentPlayer = 0;
            opponentPiece = 1;
        }
    }
    private boolean gameLoop() {
        String serverMsg;
        if(parse.getStatus() == false)
            return false;
        if(currentPlayer == 1){
            connect.setCommand(String.format("MOVE %d", ai.turn(board, 1)));
            currentPlayer = 0;
        }else{
            while(!(parse.getPlayerToMove().equals(playerName))){
                serverMsg = connect.getReply();
                parse.parse(serverMsg);//parse msg
            }
            board.setAtPos(parse.getMove(), opponentPiece);
            currentPlayer = 1;
        }
        return true;
    }

}
