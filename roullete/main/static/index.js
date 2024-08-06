const swiper = new Swiper('.hero-swiper', {
  allowTouchMove: true,
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});

const rouletteWrap = document.querySelector('.lucky-main');

  const winImg = rouletteWrap.getAttribute('data-win-icon-link');
  const winText = rouletteWrap.getAttribute('data-win-text');
  const lossText = rouletteWrap.getAttribute('data-loss-text');
const description = document.querySelector('.lucky__description');
const defaultDescription = 'Крути рулетку и получи возможность выиграть приз!';


$(document).ready(function() {
	//setup multiple rows of colours, can also add and remove while spinning but overall this is easier.
	initWheel();
 
 	$('button').on('click', function(){
		var outcome =  'win'
    spinWheel(outcome);
  });
});

function initWheel(){
	var $wheel = $('.roulette-wrapper .wheel'),
  		row = "";

  row += "<div class='row'>";
  row += "  <div class='card yellow'><img src=\"/img/fail1.png\"></div>";
  row += `  <div class='card black win-card'><img src=\"${winImg}\"><\/div>`; // true win
  row += "  <div class='card yellow'><img src=\"/img/fail3.png\"><\/div>";
  row += `  <div class='card black win-card'><img src=\"${winImg}\"><\/div>`;
  row += "  <div class='card yellow'><img src=\"/img/fail2.png\"><\/div>";
  row += `  <div class='card black win-card'><img src=\"${winImg}\"><\/div>`;
  row += "  <div class='card yellow'><img src=\"/img/fail3.png\"><\/div>";
  row += "  <div class='card black'><img src=\"/img/fail1.png\"><\/div>";
  row += `  <div class='card black win-card'><img src=\"${winImg}\"><\/div>`;
  row += "  <div class='card black'><img src=\"/img/fail2.png\"><\/div>";
  row += `  <div class='card black win-card'><img src=\"${winImg}\"><\/div>`;
  row += "  <div class='card black'><img src=\"/img/fail3.png\"><\/div>";
  row += "  <div class='card yellow'><img src=\"/img/fail1.png\"><\/div>";
  row += "  <div class='card black'><img src=\"/img/fail2.png\"><\/div>";
  row += "  <div class='card yellow'><img src=\"/img/fail3.png\"><\/div>";
  row += "<\/div>";
  
	for(var x = 0; x < 29; x++){
  	$wheel.append(row);
  }
}

function spinWheel(roll){
  description.textContent = defaultDescription;

  console.log(roll);
  var $wheel = $('.roulette-wrapper .wheel'),
  		order = ['loss', 'pseudo', 'loss', 'pseudo', 'loss', 'loss', 'loss', 'loss', 'loss', 'win', 'loss', 'pseudo', 'loss', 'pseudo', 'loss'],
      position = order.indexOf(roll);

  if (roll === 'loss') {
    const rand = Math.floor(Math.random() * 15);
    position = order[rand] !== 'loss' ? 2 : rand;
  }

  //determine position where to land
  var rows = 12,
  		card = 75 + 3 * 2,
      landingPosition = (rows * 15 * card) + (position * card);
  	
  var randomize = Math.floor(Math.random() * 75) - (75/2);
    
  landingPosition = landingPosition + randomize;
    
  var object = {
		x: Math.floor(Math.random() * 50) / 100,
    y: Math.floor(Math.random() * 20) / 100
	};
  
  $wheel.css({
		'transition-timing-function':'cubic-bezier(0,'+ object.x +','+ object.y + ',1)',
		'transition-duration':'6s',
		'transform':'translate3d(-'+landingPosition+'px, 0px, 0px)'
	});
  
  setTimeout(function(){
		$wheel.css({
			'transition-timing-function':'',
			'transition-duration':'',
		});
    
    var resetTo = -(position * card + randomize);
		$wheel.css('transform', 'translate3d('+resetTo+'px, 0px, 0px)');

    description.textContent = roll === 'win' ? winText : lossText;
  }, 6 * 1000);
}





