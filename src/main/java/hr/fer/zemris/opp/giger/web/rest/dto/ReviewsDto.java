package hr.fer.zemris.opp.giger.web.rest.dto;

import hr.fer.zemris.opp.giger.domain.Review;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Data
public class ReviewsDto {

    private List<Review> reviews;
    private Double averageGrade;
    private Integer totalReviewsCount;
}