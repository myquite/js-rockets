var car = {
  make: 'VW',
  type: 'Beetle',
  color: 'Yellow',
  isTurnedOn: false,
  numberOfWheels: 4,
  seats: [
    'seat 1', 
    'seat 2', 
    'seat 3', 
    'seat 4'
    ],
    turnOn: function () {
      this.isTurnedOn = true;
      return "Car is Started!";
    }
};

var doCoolStuff = function() {
  var currentClassName = document.getElementById('cool').className;

  if (currentClassName == 'cool') {
      document.getElementById('cool').className = 'cool display';
  } else {
      document.getElementById('cool').className = 'cool';
  }
}


  