const car = {
    make: 'Honda',
    model: 'Accord',
    year: 2020,
    colors: ['red', 'blue', 'green'],
    hybrid: false,
    drive: function() {
        console.log('Vroom!');
    },
    stop: function() {
        console.log('Screech!');
    }
}
console.log(car.make)
console.log(car.colors[0])
car.drive()
car.stop()