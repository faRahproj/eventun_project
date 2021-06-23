package tn.enis.pfa.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "CATEGORY")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Category  implements Serializable{

        private static final long serialVersionUID = 1L;

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        @Column(name="nameCategory")
        private String nameCategory;

        @JsonIgnore
        @OneToMany(mappedBy = "category")
        private List<Event> events = new ArrayList<>();
}
