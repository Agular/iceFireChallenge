package ee.cake.cake;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CakeRepository extends CrudRepository<Cake, Long> {

    @Query(value = "SELECT * FROM Cake", nativeQuery = true)
    List<Cake> findAll();

    List<Cake> findAllByAvailableIsTrue();

    @Modifying
    @Query("UPDATE Cake c SET c.available = :available WHERE c.id = :cakeId")
    void updateAvailable(@Param("cakeId") Long cakeId, @Param("available") boolean available);

    @Modifying
    @Query(value = "INSERT INTO Cake (name, price, available) VALUES (:name,:price,true)", nativeQuery = true)
    void createNewCake(@Param("name") String name, @Param("price") double price);
}
