var ordersBtn = document.querySelector('#orders');
var ordersDiv = document.querySelector('#ordersDiv');
var creditsDiv = document.querySelector('#creditsDiv');
var inviteDiv = document.querySelector('#inviteDiv');
var helpDiv = document.querySelector('#helpDiv');

var user = JSON.parse(localStorage.getItem('user'));

ordersBtn.addEventListener('click', function() {
    displayOrders();
});
// displayOrders();
displayCredits();
var credits = document.querySelector('#credits');
credits.addEventListener('click', function() {
    displayCredits();
})
var invite = document.querySelector('#invite');
invite.addEventListener('click', function() {
    displayinvite();
})
var help = document.querySelector('#help');
help.addEventListener('click', function() {
    displayhelp();
})

var contentSection = document.querySelector('#contentSection');
function displayOrders() {
    ordersDiv.style.display = 'block';
    creditsDiv.style.display = 'none';
    inviteDiv.style.display = 'none';
    helpDiv.style.display = 'none';
    var tbody = document.querySelector('tbody');
    tbody.innerHTML = null;
    var orders = user.orders || [];
    console.log(orders);
    orders.forEach(function (arr,index) {
        var tr = document.createElement('tr');
        var orderId = index;
        idTd = document.createElement('td');
        idTd.innerText = orderId+1;
        var items = " | ";
        var totalCost = 0;
        arr.forEach(function (el) {
            items += el.name + ' | ';
            totalCost += +(el.count) * +(el.currentPrice);
        });
        
        var itemsTd = document.createElement('td');
        itemsTd.innerText = items;

        var costTd = document.createElement('td');
        costTd.innerText = "₹" + totalCost;

        tr.append(idTd,itemsTd,costTd);
        console.log(tr);
        tbody.append(tr);
    });
}

function displayCredits() {
    ordersDiv.style.display = 'none';
    creditsDiv.style.display = 'block';
    inviteDiv.style.display = 'none';
    helpDiv.style.display = 'none';
    // var credits = user.credits || 0;
    var credits = 0;
    if(user.credits !== null || user.credits!== undefined) {
        credits = user.credits;
    }
    document.querySelector('#fraazoCredits > span').innerText = credits;
}
function displayinvite() {
    ordersDiv.style.display = 'none';
    creditsDiv.style.display = 'none';
    inviteDiv.style.display = 'block';
    helpDiv.style.display = 'none';
}

inviteBtn = document.querySelector('#inviteBtn');
inviteBtn.addEventListener('click', function() {
    let inviteCode = inviteBtn.innerText;
    navigator.clipboard.writeText(inviteCode);
    console.log('Invite Code Copied Successfully : '+inviteCode);
})

function displayhelp() {
    ordersDiv.style.display = 'none';
    creditsDiv.style.display = 'none';
    inviteDiv.style.display = 'none';
    helpDiv.style.display = 'block';
}

logout = document.querySelector('#logout');
logout.addEventListener('click', function() {
    logoutFunction();
});

function logoutFunction() {
    localStorage.setItem('isLoggedIn', false);
    window.location.href = '../index.html';
}