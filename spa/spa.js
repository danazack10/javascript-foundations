function createCustomer (name, bill, bookings = []){
  var customer = {
    name: name,
    bill: bill,
    bookings: bookings
  }
  return customer
}

function greeting(customer) {
  if (customer.bookings.length > 0){
    return `${customer.name}! Welcome back to Happy Spa`
  } else {
    return `${customer.name}! Welcome to Happy Spa`
  }
}

function createService(name, cost) {
  var service = {
    name: name,
    cost: cost,
  }
  if (name === undefined || cost === undefined){
    return 'Please provide service name and cost.'
  } else {
    return service
  }
}

function bookServices(customer, service) {
  customer.bookings.push(service.name);
  customer.bill = customer.bill + service.cost
  return customer;
}


//needs to return all services in an array that are less than or equal to the price argument
function applyGiftCard(allServices, price){
  var affordableServices = [];
  for (var i = 0; i < allServices.length; i++) {
  if (allServices[i].price <= price) {
    affordableServices.push(allServices[i].name)
  }
  }
  return affordableServices
}

module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
