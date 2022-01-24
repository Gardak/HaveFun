// WormHole
// An extension of the Animal class
// Adds the idea of being found when clicked
// and spinning when found

class WormHole extends SpaceObject {
  // constructor(x,y,image)
  // Calls the super constructor
  // Adds properties for being found and for a rotation speed
  constructor(x, y, image, imgSize) {
    super(x, y, image, imgSize);

    this.found = false;
    this.expandSize = 25;
    this.rotationAngle = 0.01;
  }

  // update()
  // Calls the super update() and changes angle if found (to rotate!)
  update() {
    if (this.found) {
      this.imgSize += this.expandSize;
      this.angle += this.rotationAngle;
    }
    super.update();
  }

  onOverlapClick() {
    // do smth
    this.found = true;

    gameState = 'GAMEWIN';
  }


}
 
