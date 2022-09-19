package planeat.database.entity;

/*
 *
 * IntakeFood - intake_food table entity
 *
 @author 박윤하
 @since 2022-09-15
*/

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Getter
@DynamicUpdate
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "intake_food")
public class IntakeFood {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "intake_food_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "intake_history_id")
    private IntakeHistory intakeHistory;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "food_info_id")
    private FoodInfo foodInfo;

    @Column(name = "amount", nullable = false)
    private BigDecimal amount;


    @Builder
    public IntakeFood(Long id, IntakeHistory intakeHistory, FoodInfo foodInfo, BigDecimal amount) {
        this.id = id;
        this.intakeHistory = intakeHistory;
        this.foodInfo = foodInfo;
        this.amount = amount;
    }

//    public void setAmount(BigDecimal amount) { this.amount = amount; }

    public IntakeFood update(BigDecimal amount) {
        this.amount = amount;
        return this;
    }

}