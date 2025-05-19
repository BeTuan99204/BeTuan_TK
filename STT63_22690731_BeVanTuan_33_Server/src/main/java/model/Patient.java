package model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@ToString(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor


@Entity
@Table(name = "Patient")

public class Patient extends Person implements Serializable {

    private String gender;
    private LocalDate dateOfBrith;
    private  String address;

    @ToString.Exclude
    @OneToMany(mappedBy = "patient")
    private List<Treatment> treatments;
}
