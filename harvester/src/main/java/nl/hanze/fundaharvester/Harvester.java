package nl.hanze.fundaharvester;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.ProtocolException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Harvester {
    static final String URL_STRING = "https://github.com/%s?tab=repositories";


    public Map harvest(final String user) throws FileNotFoundException {
        String url = String.format(URL_STRING, user);
        if (!urlExists(url)) throw new FileNotFoundException();

        ArrayList<Map<String, String>> repos = getRepos(url);
        Map<String, String> data = getUserData(url, repos.size());

        return Map.of("persondata", data, "repos", repos);
    }


    private ArrayList<Map<String,String>> getRepos(final String url) {
        ArrayList<Map<String, String>> result = new ArrayList<>();
        Elements repos;

        try {
            Document doc = Jsoup.connect(url).get();

            Element repo = doc.getElementById("user-repositories-list");
            repos = repo.getElementsByAttributeValue("itemprop", "owns");
            for (Element el: repos) {
                result.add(getAttributes(el));
            }
        } catch (IOException e) {
            System.out.println("Kan de URL niet openen...");
            e.printStackTrace();
        }

        return result;
    }

    private Map<String, String> getUserData(final String url, int aantal_repos) {
        Map<String, String> result = new HashMap<>();
        try {
            Document doc = Jsoup.connect(url).get();
            Elements src = doc.getElementsByAttributeValueContaining("src", "avatars");
            Elements name = doc.getElementsByAttributeValue("itemprop", "name");
            Elements username = doc.getElementsByAttributeValue("itemprop","additionalName");

            result = Map.of("avatar", src.first().attr("src"),
                    "name", name.first().text(),
                    "repoCount", aantal_repos+"",
                    "username",username.first().text());

        } catch (IOException e) {
            System.out.println("Kan de URL niet openen...");
            e.printStackTrace();
        }
        return result;
    }


    private Map<String, String> getAttributes (Element el) {
        final String[] attributes = {"name codeRepository", "description", "programmingLanguage"};
        Map<String, String> tmp = new HashMap<>();

        for (String attr: attributes) {
            String value = el.getElementsByAttributeValue("itemprop", attr).text();
            if (attr.equals("name codeRepository")) attr = "reponame"; //stom gedoe met spatie in de naam...
            tmp.put(attr,value);
        }

        String stars = el.getElementsByAttributeValueContaining("href", "stargazers").text().replace(",", "");
        String forks = el.getElementsByAttributeValueContaining("href", "members").text().replace(",","");

        if (stars.equals("")) tmp.put("stars", "0");
        else tmp.put("stars", stars);

        if (forks.equals("")) tmp.put("forks", "0");
        else tmp.put("forks", forks);

        return tmp;
    }


    private boolean urlExists(final String location) {
        try {
            URL url = new URL(location);
            HttpURLConnection huc = (HttpURLConnection) url.openConnection();
            huc.setRequestMethod("HEAD");

            int resp = huc.getResponseCode();
            if (resp==200) return true;

        } catch (ProtocolException e) {
            System.out.println("ERROR: fout protocol");
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println("ERROR: iets met IO...");
            e.printStackTrace();
        }

        return false;
    }
}
