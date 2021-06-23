package tn.enis.pfa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import tn.enis.pfa.storage.StorageProperties;
import tn.enis.pfa.storage.StorageService;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@EnableConfigurationProperties(StorageProperties.class)
public class EvenTunPfaApplication {

	public static void main(String[] args) {

		//new File(EventController.uploadDirectory).mkdir();
		SpringApplication.run(EvenTunPfaApplication.class, args);

	}
	@Bean
	CommandLineRunner init(StorageService storageService) {
		return (args) -> {
			storageService.deleteAll();
			storageService.init();
		};
	}

}