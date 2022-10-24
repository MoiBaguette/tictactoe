import java.util.Random;

public class Ai {
    /*this is where my AI would be. IF I HAD ONE! :P*/
    public void turn(Board board, int naughtOrCross){
        Random random = new Random();
        int rn = 0;
        boolean state = true;
        while(state){
            /*tries to make a move at random indices until succesful)*/
            rn = random.nextInt(9);
            if(board.setAtPos(rn,naughtOrCross))
                state = false;
        }
    }
}
