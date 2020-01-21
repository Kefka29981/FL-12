function Fighter({ name, damage, strength, agility, health }) {

    this.name = name;
    this.damage = damage;
    this.strength = strength;
    this.agility = agility;
    this.health = health;

    const maxHealth = 100;
    const maxChance = 101;
    let wins = 0;
    let losses = 0;
    
    return {

      getName: () => name,
      getDamage: () => damage,
      getStrength: () => strength,
      getAgility: () => agility,
      getHealth: () => health,
      addWin: () => wins++,
      addLoss: () => losses++,

      logCombatHistory: function() {
        console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
    },
    heal: function(heal){
        health += heal;
        if (health > maxHealth){
            health = maxHealth;
        }
    },
    dealDamage: function(dmg){
        health -= dmg;
        if (health < 0){
            health = 0;
        }
    },
    attack: function(enemy) {
      let hitChance = maxChance - (strength + agility);
      let random = Math.floor(Math.random() * maxChance);
      if(hitChance > random) {
          enemy.dealDamage(damage);
          console.log(`${name} makes ${damage} damage to ${enemy.getName()}`)
      } else {
          console.log(`${name} attack missed`);
      }
  }
    }
}

function battle(fighter1, fighter2) {
  for(const fighter of arguments) {
      if(fighter.getHealth() === 0) {
          return fighter.getName() + ' is dead and cant fight.';
      }
  }

  while(fighter1.getHealth() !== 0 || fighter2.getHealth() !== 0) {
      fighter1.attack(fighter2);
      if(fighter2.getHealth() === 0) {
          fighter1.addWin();
          fighter2.addLoss();
          return fighter1.getName() + ' has won';
      }
      fighter2.attack(fighter1);
      if(fighter1.getHealth() === 0) {
          fighter2.addWin();
          fighter1.addLoss();
          return fighter2.getName() + ' has won';
      }
  }
}
