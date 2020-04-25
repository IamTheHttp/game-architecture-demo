import {Entity} from "game-platform";

function moveSystem() {
  let entities = Entity.getByComps(['SPEED', 'DESTINATION', 'POSITION']);

  entities.forEach((entity) => {
    // Where are we now?
    let {x: currX, y: currY} = entity.components['POSITION'];

    // Where are we going?
    let {x:destX, y:destY} = entity.components['DESTINATION'];

    // At what speed?
    let {speed} = entity.components['SPEED'];


    // lets go, adjust POSITION
    // decide if we need to subtract or increase X, Y

    if (currX < destX) {
      entity.components['POSITION'].x += speed;
    } else {
      entity.components['POSITION'].x -= speed;
    }

    if (currY < destY) {
      entity.components['POSITION'].y += speed;
    } else {
      entity.components['POSITION'].y -= speed;
    }
  });
}

export default moveSystem;
