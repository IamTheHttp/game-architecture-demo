import {Entity} from 'game-platform';
import SpeedComponent from "../Components/SpeedComponent";
import PositionComponent from "../Components/PositionComponent";
import ColorComponent from "../Components/ColorComponent";
import AIComponent from "../Components/AIComponent";

class Enemy extends Entity {
  constructor(x, y) {
    super(Enemy);

    this.addComponent(new PositionComponent(x, y));
    this.addComponent(new SpeedComponent(1));
    this.addComponent(new ColorComponent('red'));
    this.addComponent(new AIComponent());
  }
}

export default Enemy;
