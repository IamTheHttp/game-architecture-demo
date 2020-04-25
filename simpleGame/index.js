import Player from "./Entities/Player";
import DestinationComponent from "./Components/DestinationComponent";
import renderSystem from "./Systems/renderSystem";
import moveSystem from "./Systems/moveSystem";
import Enemy from "./Entities/Enemy";
import AISystem from "./Systems/AISystem";


/**
 * Game setup, create all the needed entities.
 */
let player = new Player(50, 50);
new Enemy(0, 0);


/**
 * Listen to User Input, adjust player destination based on mouse movement
 */
// window.canvas is defined in index.html as a canvasElement
window.canvas.addEventListener('mousemove', (event) => {
  // player.moveTo(event.x, event.y); This is what we had before, now we'll write it 'properly'
  if (player.hasComponents(['DESTINATION'])) {
    player.components['DESTINATION'].x = event.x;
    player.components['DESTINATION'].y = event.y;
  } else {
    player.addComponent(new DestinationComponent(event.x, event.y));
  }
});



/**
 * Run the all the systems, goodluck!
 */
setInterval(() => {
  // window.ctx is defined in index.html, it's a canvas context
  window.ctx.clearRect(0,0,500,500);
  moveSystem();
  renderSystem();
  AISystem();
}, 16);
