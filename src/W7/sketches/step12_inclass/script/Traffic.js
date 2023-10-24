class Traffic {
  constructor() {
    this.vehicles = [];
  }
  run( {
    this.vehicles.forEach(
        (eachVehicle)=>{
            eachVeficle.update()
            eachVeficle.display()
        });
    
  }
  addVehicle(x, y) {
    this.vehecles.push(
      new Vegicle(x, y, 8, 5, 0.1, color(random(360), 100, 50))
    );
  }
}
