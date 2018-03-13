package ee.cake.cake;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("cakes")
public class CakeController {

    @Autowired
    private CakeRepository cakeRepository;

    @Transactional
    @PostMapping("new")
    public void createNewCake(@RequestBody NewCakeJson json) {
        cakeRepository.createNewCake(json.getName(), json.getPrice().doubleValue());
    }

    @GetMapping("all")
    public List<Cake> findAllCakes() {
        return cakeRepository.findAll();
    }

    @GetMapping("available")
    public List<Cake> findAvailableCakes() {
        return cakeRepository.findAllByAvailableIsTrue();
    }

    @Transactional
    @PostMapping("{cakeId}/deactivate")
    public void deactivateCake(@PathVariable Long cakeId) {
        cakeRepository.updateAvailable(cakeId, false);
    }
}
