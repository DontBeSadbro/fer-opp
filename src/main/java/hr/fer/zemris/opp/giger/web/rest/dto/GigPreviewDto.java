package hr.fer.zemris.opp.giger.web.rest.dto;

import hr.fer.zemris.opp.giger.domain.Location;
import hr.fer.zemris.opp.giger.domain.Organizer;
import hr.fer.zemris.opp.giger.domain.enums.GigType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GigPreviewDto {

    private Long id;
    private Organizer organizer;
    private LocalDateTime dateTime;
    private Location location;
    private String description;
    private String expectedDuration;
    private Integer proposedPrice;
    private GigType gigType;
    private boolean finalDealAchieved;
    private boolean privateGig;

}