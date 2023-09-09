/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow': '&#xe900;',
		'icon-back': '&#xe901;',
		'icon-cart': '&#xe902;',
		'icon-clock': '&#xe903;',
		'icon-compare': '&#xe904;',
		'icon-favorite': '&#xe905;',
		'icon-letter': '&#xe906;',
		'icon-location': '&#xe907;',
		'icon-logo': '&#xe908;',
		'icon-phone': '&#xe909;',
		'icon-rub': '&#xe90a;',
		'icon-search': '&#xe90b;',
		'icon-star': '&#xe90c;',
		'icon-user': '&#xe90d;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
