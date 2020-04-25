function renderSystem() {
  let entities = Entity.getByComps(['POSITION', 'COLOR']);
  entities.forEach((entity) => {
    let {x, y} = entity.components['POSITION'];
    let {color} = entity.components['COLOR'];
    window.drawCircle(x, y, color);
  });
}

export default renderSystem;
