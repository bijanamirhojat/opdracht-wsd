package nl.hanze.fundaharvester;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

	public static void main(String[] args) throws Exception {
//		System.out.println(new Harvester().getRepos("bart314"));

		SpringApplication.run(Application.class, args);
	}

}
