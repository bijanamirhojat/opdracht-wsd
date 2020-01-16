package nl.hanze.fundaharvester;

import com.google.gson.Gson;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class HarvesterApi {
    private Harvester harvester = new Harvester();

    public HarvesterApi() {
    }

    @GetMapping("/")
    public String hello() {
        return "Welkom bij de github harvester REST controller." +
                "Check de opgave en de RAML voor meer informatie";
    }

    @GetMapping("/hallo/{naam}")
    public ResponseEntity<String> greetings(@PathVariable(name = "naam") String user) {
        HttpHeaders heads = new HttpHeaders();
        heads.set("Content-type", "application/json");
        Map<String, String> res = new HashMap<>();
        res.put("response", String.format("Hallo %s", user));
        return ResponseEntity.ok().headers(heads).body(new Gson().toJson(res));
    }


    /** WEEK 5, OPGAVE 2
     *
     * Zorg ervoor dat de functionaliteit van de Harvester beschikbaar wordt gesteld
     * via een REST end-point. Bekijk de voorbeelden hierboven om een beeld te krijgen
     * van de oplossing; bestudeer de werking van de Harvester om te zien welke methoden
     * er publiekelijk beschikbaar zijn. Gebruik Gson voor de serialisatie.
     */

    // YOUR CODE HERE
    @GetMapping("/{naam}")
    public ResponseEntity<String> nieuw(@PathVariable(name = "naam") final String user) {
        final HttpHeaders heads = new HttpHeaders();
        heads.set("Content-type", "application/json");
        try {
            new Harvester().harvest(user);

        } catch (final FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            final Map<String, String> res = new HashMap<>();
            res.put("response", String.format("Hallo, niet gevonden!"));
            return ResponseEntity.ok().headers(heads).body(new Gson().toJson(res));
        }

        final Map<String, String> res = new HashMap<>();
        res.put("response", String.format("Hallo, gevonden!"));
        return ResponseEntity.ok().headers(heads).body(new Gson().toJson(res));
        // return ResponseEntity.ok().headers(heads).body(new Gson().toJson(user));

    }

    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getdata/{username}")
    public ResponseEntity<String>  getdata(@PathVariable(name = "username") String user) throws FileNotFoundException {
        try {
            Gson gson = new Gson();
            Map<String, String> res = new HashMap<>();
            res = harvester.harvest(user);
            String jsonInString = gson.toJson(res);
            HttpHeaders heads = new HttpHeaders();
            heads.set("Content-type", "application/json");
            return ResponseEntity.ok().headers(heads).body(jsonInString);
        }
        catch (FileNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
