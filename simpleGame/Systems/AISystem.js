import {Entity} from "game-platform";
import DestinationComponent from "../Components/DestinationComponent";

function AISystem() {
  // We need the player, but lets be extra safe and ensure he has a position
  // we get an array back, but we only need the first (and only) Entity
  let player = Entity.getByComps(['PLAYER', 'POSITION'])[0];

  let {x: playerX, y: playerY} = player.components['POSITION'];
  let enemies = Entity.getByComps(['AI']);

  // Update the destination of each enemy
  enemies.forEach((enemy) => {
    // If the enemy has a destination, update it
    if (enemy.hasComponents(['DESTINATION'])) {
      enemy.components['DESTINATION'].x = playerX;
      enemy.components['DESTINATION'].y = playerY;
    } else {
      // else, create a destination component
      enemy.addComponent(new DestinationComponent(playerX, playerY));
    }
  });
}

export default AISystem;
