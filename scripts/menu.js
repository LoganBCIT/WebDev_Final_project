(function(d){
	
	const $nav = d.querySelector('nav');
	const $btn = d.querySelector('.menu-toggle');
	
	$btn.addEventListener('click', function(){		

		$nav.classList.toggle('show');	

		if($btn.innerHTML == "☰"){
			$btn.innerHTML = "✕";
		}else{
			$btn.innerHTML = "☰";
		}		

	});
	
	
})(document);