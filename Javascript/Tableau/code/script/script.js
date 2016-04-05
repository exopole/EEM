var message1 = 'St_v_n P*$l "St_v_" J&bs w*s *n *m_r%c*n %nv_nt&r *nd _ntr_pr_n_$r. H_ w*s c&-f&$nd_r,ch*%rm*n, *nd ch%_f _x_c$t%v_ &ff%c_r &f *ppl_ %nc. J&bs w*s c&-f&$nd_r *nd pr_v%&$slys_rv_d *s ch%_f _x_c$t%v_ &f P%x*r *n%m*t%&n St$d%&s; h_ b_c*m_ * m_mb_r &f th_ b&*rd &fd%r_ct&rs &f th_ W*lt D%sn_y C&mp*ny %n 2006, f&ll&w%ng th_ *cq$%s%t%&n &f P%x*r by D%sn_y.';
var message2 = 'W-ll-#m H°>ry "B-ll" G#t°< III (b*r> Oct*b°r 28, 1955) -< #> Am°r-c#> bu<->°<< m#g>#t°,ph-l#>thr*p-<t, ->v°<t*r, c*mput°r pr*gr#mm°r, #>d ->v°>t*r. G#t°< -< th° f*rm°r ch-°f°x°cut-v° #>d ch#-rm#> *f M-cr*<*ft, th° w*rld\'< l#rg°<t p°r<*>#l c*mput°r <*ftw#r°c*mp#>y, wh-ch h° c*-f*u>d°d w-th P#ul All°>.';
var message3 = 'S!r T!m07hy J0hn "T!m" B3rn3r5-L33, 4150 kn0wn 45 "T!mBL", !5 4n Eng1!5h c0mpu73r 5c!3n7!57, b357 kn0wn 45 7h3 !nv3n70r 0f 7h3 W0r1d W!d3 W3b. H3 m4d3 4 pr0p0541 f0r 4n !nf0rm47!0n m4n4g3m3n7 5y573m !n M4rch 89, 4nd h3 !mp13m3n73d 7h3 f!r57 5ucc355fu1 c0mmun!c47!0nb37w33n 4 Hyp3r73x7 Tr4n5f3r Pr070c01 (HTTP) c1!3n7 4nd 53rv3r v!4 7h3 In73rn37 50m37!m34r0und m!d N0v3mb3r 0f 7h47 54m3 y34r.';
var message4 = 'Sl jopmmyl kl Jlzhy (vb jvkl kl Jlzhy) lza bu jopmmyltlua why kljhshnl whytp slz wsbzzptwslz la slz wsbz jvuub, ps bapspzl sh zbizapabapvu k\'bul slaayl why bul hbayl wsbzsvpu khuz s\'hswohila';
const alphabetMin = genCharArray('a', 'z');
const alphabetMax = genCharArray('A', 'Z');

function codeMessage1(lettre) {
	switch (lettre){
		case "_":
			return "e";
		case "*":
			return "a";
		case "%":
			return "i";
		case "&":
			return "o";
		case "$":
			return "u";
		default:
			return lettre;
	}

}

function codeMessage2(lettre) {
	switch (lettre){
		case "#":
			return "e";
		case "*":
			return "a";
		case "°":
			return "i";
		case "<":
			return "o";
		case ">":
			return "u";
		case "-" :
			return "i";
		default :
			return lettre; 
	}

}

function codeMessage3(lettre) {
	switch (lettre){
		case "4":
			return "a";
		case "3":
			return "e";
		case "!":
			return "i";
		case "0":
			return "o";
		case "1":
			return "l";
		case "5":
			return "s";
		case "7":
			return "t";
		default:
			return lettre;
	}
}

function codeMessage4(lettre){
	var index;
	if (lettre.charCodeAt(0) <= 'z'.charCodeAt(0) && lettre.charCodeAt(0) >= 'a'.charCodeAt(0)) {
		if(lettre.charCodeAt(0) - 7 >= 'a'.charCodeAt(0))
			return (String.fromCharCode(lettre.charCodeAt(0) - 7));
		
		else  
			return String.fromCharCode('z'.charCodeAt(0) - ('a'.charCodeAt(0)-1 - (lettre.charCodeAt(0) - 7)));
		

	}
	if (lettre.charCodeAt(0) <= 'Z'.charCodeAt(0) && lettre.charCodeAt(0) >= 'A'.charCodeAt(0)) {
		if(lettre.charCodeAt(0) - 7 >= 'A'.charCodeAt(0))
			return (String.fromCharCode(lettre.charCodeAt(0) - 7));
		else  
			return String.fromCharCode('Z'.charCodeAt(0) - (7 - lettre.charCodeAt(0) - 'A'.charCodeAt(0)));
	}
	return lettre;
}

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}


function decodeMessage (message, code){
	var tablMessage = message.split("");
	var result = "";
	for (var i = 0 ; i < tablMessage.length ; i++)
		result += code(tablMessage[i]);
	return result;
}

// alert(decodeMessage(message1, codeMessage1));
// alert(decodeMessage(message2, codeMessage2));
//alert(decodeMessage(message3, codeMessage3));
alert(decodeMessage(message4, codeMessage4));

