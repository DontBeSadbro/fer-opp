package hr.fer.zemris.opp.giger.domain;

import lombok.Data;

import javax.persistence.Embeddable;

@Embeddable
@Data
public class Location {

    private Double x;
    private Double y;
    private String address;
    private String extraDescription;
}
