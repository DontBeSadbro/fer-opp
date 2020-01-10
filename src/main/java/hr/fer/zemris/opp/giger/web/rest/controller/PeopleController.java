package hr.fer.zemris.opp.giger.web.rest.controller;

import hr.fer.zemris.opp.giger.domain.Instrument;
import hr.fer.zemris.opp.giger.domain.Person;
import hr.fer.zemris.opp.giger.domain.exception.GigerValidationException;
import hr.fer.zemris.opp.giger.service.PeopleService;
import hr.fer.zemris.opp.giger.web.rest.dto.FindUsersDto;
import hr.fer.zemris.opp.giger.web.rest.dto.PersonPreviewDto;
import hr.fer.zemris.opp.giger.web.rest.dto.ReviewPreviewDto;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.util.List;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class PeopleController {

	private static final Logger LOGGER = LoggerFactory.getLogger(PeopleController.class);
	private PeopleService peopleService;

	@PostMapping("/findUsers")
	private List<Person> findUsers(@Valid @RequestBody FindUsersDto findUsersDto) {
		return peopleService.findPeople(findUsersDto);
	}

	@GetMapping("/reviews/{personId}")
	public List<ReviewPreviewDto> listReviewsForPerson(@PathVariable @Min(1) Long personId) {
		return peopleService.getReviews(personId);
	}

	@GetMapping("/{id}")
	public PersonPreviewDto getPerson(@PathVariable @Min(1) Long personId) {
		return peopleService.findPerson(personId);
	}

	@GetMapping("/get-all-instruments")
	public List<Instrument> getAllInstruments() {
		return peopleService.getAllInstrument();
	}

	private void handleValidation(BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			LOGGER.warn("Validation Exception: " + bindingResult.getAllErrors());
			throw new GigerValidationException(bindingResult);
		}
	}
}
