package tn.enis.pfa.entities;

	import java.io.Serializable;
	import java.util.HashSet;
	import java.util.Set;

	import javax.persistence.CascadeType;
	import javax.persistence.DiscriminatorValue;
	//import javax.persistence.Column;
	import javax.persistence.Entity;
	import javax.persistence.JoinColumn;
	//import javax.persistence.GeneratedValue;
	//import javax.persistence.GenerationType;
	//import javax.persistence.Id;
	import javax.persistence.JoinTable;
	import javax.persistence.ManyToMany;
	import javax.persistence.Table;

	import lombok.AllArgsConstructor;
	import lombok.Data;
	import lombok.EqualsAndHashCode;
	import lombok.NoArgsConstructor;
	import lombok.ToString;

	@Entity
	@DiscriminatorValue("org")
	@Table(name = "ORGANIZER")
	@EqualsAndHashCode(callSuper = true)
	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	@ToString
	public class Organizer extends User implements Serializable {

		private static final long serialVersionUID = 1L;

		@ManyToMany(cascade = CascadeType.ALL)
		@JoinTable(name = "ORGANIZEDEVENT", joinColumns = @JoinColumn(name = "idOrganizer"), inverseJoinColumns = @JoinColumn(name = "idEvent"))
		private Set<Event> events = new HashSet<>();

	}
