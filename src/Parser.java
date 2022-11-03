import javax.swing.*;
import java.util.regex.Pattern;

public class Parser {
	private String playerToMove;
	private String move;
	private String gameType;
	private String comment;
	private boolean gameStatus;
	private boolean toMove;
	private String playerName;
	public Parser(String name) {
		gameStatus = false;
		playerName = name;
	}
	public void parse(String msg){
		String[] splitMsg = msg.split(" ");
		int i = 0;
		while(i < splitMsg.length){
			splitMsg[i].replace("{", "");//remove the stupid curly braces
			splitMsg[i].replace(",", "");//lets remove those commas too
			splitMsg[i].replace("\"", "");//wile were at it get rid of the accolades
		}
		i = 0;
		while(i < splitMsg.length){
			if(splitMsg[i].equals("PLAYERTOMOVE:")){
				playerToMove = splitMsg[i+1];
				if(playerToMove.equals(playerName))
					toMove = true;
			}
			if(splitMsg[i].equals("MOVE:")){
				move = splitMsg[i+1];
			}
			if(splitMsg[i].equals("GAMETYPE:")){
				gameType = splitMsg[i+1];
			}
			if(splitMsg[i].equals("COMMENT:")){
				comment = splitMsg[i+1];
			}
			if(splitMsg[i].equals("SVR")){
				if(splitMsg[i+1].equals("GAME")){
					if(splitMsg[i+2].equals("MATCH"))
						gameStatus = true;
					if (splitMsg[i+2].equals("YOURTURN"))
						toMove = true;
					if(splitMsg[i+2].equals("WIN")){
						System.out.print("We win");
						gameStatus = false;
					}
					if(splitMsg[i+2].equals("DRAW")){
						System.out.print("We draw");
						gameStatus = false;
					}
					if(splitMsg[i+2].equals("DRAW")){
						System.out.print("We lose");
						gameStatus = false;
					}
				}
			}
		}
	}
	public int getMove(){
		return Integer.parseInt(move);
	}
	public String getPlayerToMove(){
		return playerToMove;
	}
	public String getGameType(){
		return gameType;
	}
	public String getComment(){
		return comment;
	}
	public boolean getStatus(){
		return gameStatus;
	}
	public boolean getToMove(){
		return toMove;
	}
	public void setToMove(){
		toMove = false;
	}
}
