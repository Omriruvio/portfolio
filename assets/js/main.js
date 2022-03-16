/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

})(jQuery);

const iconHead = document.querySelector('.logo-head');
const iconGlasses = document.querySelector('.logo-glasses');
const logoLeftEye = document.querySelector('.logo-left-eyelid');
const logoRightEye = document.querySelector('.logo-right-eyelid');
const eyesContainer = [ logoLeftEye, logoRightEye ];

const animateHead = () => iconHead.classList.add('js-move-head');
const animateEyes = () => eyesContainer.forEach(item => item.classList.add('js-wink', 'js-move-eyes'))
const animateGlasses = () => iconGlasses.classList.add('js-move-eyes');
const keepRightEyeOpen = () => logoRightEye.classList.add('js-keep-eye-open');

const stopHeadAnimation = () => iconHead.classList.remove('js-move-head');
const stopEyesAnimation = () => eyesContainer.forEach(item => item.classList.remove('js-wink', 'js-move-eyes'));
const stopGlassesAnimation = () => iconGlasses.classList.remove('js-move-eyes');
const stopKeepRightEyeOpen = () => logoRightEye.classList.remove('js-keep-eye-open');

const animationStartDelay = 2000;
const animationEndDelay = 4500;

iconHead.addEventListener('transitionend', () => setTimeout(stopHeadAnimation, animationEndDelay))
iconGlasses.addEventListener('transitionend', () => setTimeout(stopGlassesAnimation, animationEndDelay))
eyesContainer.forEach(item => {
	item.addEventListener('transitionend', () => setTimeout(stopEyesAnimation, animationEndDelay))
})
logoRightEye.addEventListener('transitionend', () => setTimeout(stopKeepRightEyeOpen, animationEndDelay))

window.addEventListener('load', (event) => {
	setTimeout(animateHead, animationStartDelay);
	setTimeout(animateEyes, animationStartDelay);
	setTimeout(animateGlasses, animationStartDelay);
	setTimeout(keepRightEyeOpen, animationStartDelay);
  console.log('page is fully loaded');
});

