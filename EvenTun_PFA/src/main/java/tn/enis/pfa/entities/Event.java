package tn.enis.pfa.entities;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Calendar;
import java.util.Date;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;


@Entity
@Table(name = "EVENT")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Event implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	@Column(name="dateStart")
	//@Temporal(TemporalType.DATE)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy/MM/dd hh:mm")
	private Date dateStart;
	@Column(name="dateEnd")
	//@Temporal(TemporalType.DATE)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy/MM/dd hh:mm")
	private Date dateEnd;
	@ManyToMany(mappedBy = "events")
	@JsonIgnore
	private Set<Organizer> organizers=new HashSet<>();
	private double prix;
	private String location;
	private String image;
	private int nbrticket;
	private String description;
	private String family;

	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;
}