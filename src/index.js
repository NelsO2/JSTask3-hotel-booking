
// click on "room categories" to see more
function dropdown(){
    document.getElementById('submenu').classList.toggle('hidden');
    
}

// getting images of room categories to display when booking
addtobookingbtnDom.forEach(addtobookingbtnDom => {
  addtobookingbtnDom.addEventListener("click", () => {
    const roomDom = addtobookingbtnDom.parentNode.parentNode;
    const room = {
      img: roomDom.getElementById("room-img").getAttribute("src"),
      name: roomDom.getElementById("room-name").innerText,
      price: roomDom.getElementById("room-price").innerText,
      quantity: 1
   };

  //   create html element with rooms images, add and remove button
const isBooked = booking.filter(bookingItem => bookingItem.name === room.name).length > 0;
if (isBooked === false) {
  bookingDom.insertBefore("beforeend",`
  <div class="d-flex flex-row shadow-sm card book-items mt-2 mb-3 animated flipInX">
    <div class="p-2">
        <img src="${room.img}" alt="${room.name}" style="max-width: 50px;"/>
    </div>
    <div class="p-2 mt-3">
        <p class="text-info room_item_name">${room.name}</p>
    </div>
    <div class="p-2 mt-3">
        <p class="text-success room_item_price">${room.price}</p>
    </div>
    <div class="p-2 mt-3 ml-auto">
        <button class="btn badge badge-secondary" type="button" data-action="increase-item">&plus;
    </div>
    <div class="p-2 mt-3">
      <p class="text-success room_item_quantity">${room.quantity}</p>
    </div>
    <div class="p-2 mt-3">
      <button class="btn badge badge-info" type="button" data-action="decrease-item">&minus;
    </div>
    <div class="p-2 mt-3">
      <button class="btn badge badge-danger" type="button" data-action="remove-item">&times;
    </div>
  </div> `);

  // added rooms part and create payment button on html
  if(document.querySelector('.mybookings-footer') === null){
    bookingDom.insertAdjacentHTML("afterend",  `
      <div class="d-flex flex-row shadow-sm card room-footer mt-2 mb-3 animated flipInX">
        <div class="p-2">
          <button class="btn badge-danger" type="button" data-action="clear-bookings">Clear My-booking
        </div>
        
        <div class="p-2 ml-auto">
          <button class="btn badge-dark" type="button" data-action="check-out">Pay <span class="pay"></span> 
            &#10137;
        </div>
      </div>`); }
    // added rooms here
    addtobookingbtnDom.innerText = ("In bookings");
    addtobookingtbtnDom.disabled = true;
    booking.push('room');

    const bookedItemsDom = bookingDom.querySelectorAll(".booking-items");
    bookedItemsDom.forEach(bookedItemDom => {

    if (bookedItemDom.querySelector(".booking_item_name").innerText === room.name) {

      bookingTotal += parseInt(bookedItemDom.querySelector(".booking_item_quantity").innerText) 
      * parseInt(roomItemDom.querySelector(".booking_item_price").innerText);
      document.querySelector('.pay').innerText = bookingTotal + " Naira";

      // increase item in added rooms
      roomItemDom.querySelector('[data-action="increase-item"]').addEventListener("click", () => {
        booking.forEach(roomItem => {
          if (bookingItem.name === product.name) {
            roomItemDom.querySelector(".booking_item_quantity").innerText = ++roomItem.quantity;
            bookingItemDom.querySelector(".booking_item_price").innerText = parseInt(roomItem.quantity) *
            parseInt(roomItem.price) + " ₦";
            roomTotal += parseInt(roomItem.price)
            document.querySelector('.pay').innerText = roomTotal + " ₦";
          }
        });
      });

      // decrease item in added room
      roomItemDom.querySelector('[data-action="decrease-item"]').addEventListener("click", () => {
        room.forEach(roomItem => {
          if (roomItem.name === product.name) {
            if (roomItem.quantity > 1) {
              roomItemDom.querySelector(".room_item_quantity").innerText = --roomItem.quantity;
              roomItemDom.querySelector(".room_item_price").innerText = parseInt(roomItem.quantity) *
              parseInt(roomItem.price) + " ₦";
              roomTotal -= parseInt(roomItem.price)
              document.querySelector('.pay').innerText = roomTotal + " ₦";
            }
          }
        });
      });

      //clear booking
      document.querySelector('[data-action="clear-room"]').addEventListener("click" , () => {
        roomItemDom.remove();
        room = [];
        roomTotal = 0;
        if(document.querySelector('.room-footer') !== null){
          document.querySelector('.room-footer').remove();
        }
        addtoroombtnDom.innerText = "Add to room";
        addtoroombtnDom.disabled = false;
      });

      //adding paypal payment gateways
      document.querySelector('[data-action="check-out"]').addEventListener("click" , () => {
        if(document.getElementById('payHTMLForm') === null){
          checkOut();
        }
      });
    }
  });
}
});
});

// creating room array to display total, available and booked room
function avail(){
var roomAvail = document.getElementById('check')
}  
var roomArray = [
  {name: "standard", quantity: 13, available: 3, booked: 10},
  {name: "studio", quantity: 12, available: 6, booked: 6},
  {name: "delux", quantity: 7, available: 5, booked: 2},
  {name: "standard", quantity: 8, available: 8, booked: 0} 
];
alert(roomArray.join('\n')); 

// array of sign up users
members =[
  {id: 1, name: "janet stones", email: "janetstones@gmail.com", password: "123456"},
  {id: 2, name: "faith blessing", email: "faithbless@gmail.com", password: "12345678"}
];

var formCont = getElementById('formcont');
var signUp = getElementById('signup')
var logForm = getElementById('logform')
var submitBtn = getElementById('submitbtn')

submitBtn.addEventListener('click', (e)=>{
  let currentUser;
  e.preventDefault()

  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  members.map(user=>{
      if (user.email === email){
        currentUser = user
      }
  })

})

if (email === currentUser.email && password === currentUser.password){
    formCont.style.display = "none"
    fullname = currentUser.name.split(' ')
    initials = fullname[0].charAt(0) + fullname[1].charAt(0)
    document.getElementById("show").innerHTML = initials.toUpperCase()
    formCont.style.display = "none"
  }else{
    document.getElementById('errorOutput').innerText ="Email or password not correct"
}

