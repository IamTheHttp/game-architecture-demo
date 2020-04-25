import {Entity} from 'game-platform';
import SpeedComponent from "../Components/SpeedComponent";
import PositionComponent from "../Components/PositionComponent";
import ColorComponent from "../Components/ColorComponent";
import PlayerComponent from "../Components/PlayerComponent";

class Player extends Entity {
  constructor(x, y) {
    super(Player);

    this.addComponent(new PositionComponent(x, y));
    this.addComponent(new SpeedComponent(5));
    this.addComponent(new ColorComponent('green'));

    // This allowed system to query for the player
    // Think of it like html classes for querySelector
    this.addComponent(new PlayerComponent());
  }
}

export default Player;
