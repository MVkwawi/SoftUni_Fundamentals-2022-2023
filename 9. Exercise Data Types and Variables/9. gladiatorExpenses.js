function gladiatorExpenses(lostFigths, helmet, sword, shield, armor) {
    let expenses = 0;
    let borkenShield = 0;
    
    for (let currentFight = 1; currentFight <= lostFigths; currentFight ++){
       

        if (currentFight % 2 === 0) { //broken helmet every 2nd fight
            expenses += helmet;
        }

        if (currentFight % 3 === 0) { //broken sword every 3rd fight
            expenses += sword;
        }

        if (currentFight % 2 === 0 && currentFight % 3 === 0) { //if both the helmet and the sword are broken in the same fight, the shield also bkeaks
            expenses += shield;
            borkenShield ++;
            
            if (borkenShield % 2 === 0) { //
            expenses += armor;
        }
        }

        
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    )