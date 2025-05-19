package model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString

@Entity
@Table(name = "Treatment")

public class Treatment implements Serializable {

    @Id
    private LocalDate startDate;
    private LocalDate endDate;
    private String diagnosis;


    @Id
    @ToString.Exclude
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    @Id
    @ToString.Exclude
    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

}
