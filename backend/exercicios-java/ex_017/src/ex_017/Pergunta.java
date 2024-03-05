package ex_017;
import java.util.LinkedHashMap;

public class Pergunta {
	String texto;
	LinkedHashMap<String, Integer> opcoes = new LinkedHashMap<String, Integer>();
	
	public void setTexto(String texto) {
		this.texto = texto;
	}
}
