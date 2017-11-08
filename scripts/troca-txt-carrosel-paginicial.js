$(document).ready(function(){
 	let owl1 = $('.owl-carousel.historia');
	let owl2 = $('.owl-carousel.funcionamento');

	//PRIMEIRO CARROSEL
	//detecta o antigo item para retirar o .gif e troca por .png
	owl1.on('translate.owl.carousel', function(event) { //funcao começa ao inicio do translate (item do centro ainda é o antigo)
		let altAntiga = $('.center > img.img-historia').attr("alt");
		$('.center > img.img-historia').attr('src', './imgs/historia/'+altAntiga+'.png');
	});
	//detecta o novo item para colocar o .gif
	owl1.on('translated.owl.carousel', function(event) {
		let altNova = $('.center > img.img-historia').attr("alt"); //seleciona imagem pelo atributo alt
		$('.center > img.img-historia').attr('src', './imgs/historia/'+altNova+'-animado.gif');
		if (altNova == "01") $('#troca-historia').replaceWith('<p id="troca-historia">Somos a empresa júnior de design da UNESP de Bauru.</p>');
		if (altNova == "02") $('#troca-historia').replaceWith('<p id="troca-historia">Em 2000 foi apresentado um TCC sobre Gestão em Design. Graças a ele nossa empresa foi fundada no ano seguinte.</p>');
		if (altNova == "03") $('#troca-historia').replaceWith('<p id="troca-historia">Queremos que o design seja acessível a todos! Fazemos projetos particulares de pequeno, médio e grande porte e projetos de cunho social.</p>');
		if (altNova == "04") $('#troca-historia').replaceWith('<p id="troca-historia">A DJR é composta por estudantes de design que trabalham juntos de forma horizontal.</p>');
		if (altNova == "05") $('#troca-historia').replaceWith('<p id="troca-historia">A cada 6 meses novas pessoas entram na DJR. Muita gente já passou por aqui!</p>');
	});

	//SEGUNDO CARROSEL
	//detecta o antigo item para retirar o .gif e troca por .png
	owl2.on('translate.owl.carousel', function(event) { //funcao começa ao final do translate
		let altAntiga = $('.center > img.img-func').attr("alt");
		$('.center > img.img-func').attr('src', './imgs/funcionamento/'+altAntiga+'.png');
	});
	//detecta o novo item para colocar o .gif
	owl2.on('translated.owl.carousel', function(event) {
		let altNova = $('.center > img.img-func').attr("alt"); //seleciona imagem pelo atributo alt
		$('.center > img.img-func').attr('src', './imgs/funcionamento/'+altNova+'-animado.gif');
		if (altNova == "01") $('#troca-func').replaceWith('<p id="troca-func"><strong>IDENTIDADE VISUAL</strong><br>Desenvolvemos logos, banners, folders, uniformes, cartazes, cartões de visita e todos os materiais da identidade visual que um projeto ou empresa precisar.</p>');
		if (altNova == "02") $('#troca-func').replaceWith('<p id="troca-func"><strong>BRINDES</strong><br>Trabalhamos com tipos de brindes mais variados, como chaveiros, canecas, adesivos e outros.</p>');
		if (altNova == "03") $('#troca-func').replaceWith('<p id="troca-func"><strong>WEB</strong><br>Fazemos layouts de sites, identidade para redes sociais, assinaturas digitais e outros materiais envolvendo divulgação digital.</p>');
		if (altNova == "04") $('#troca-func').replaceWith('<p id="troca-func"><strong>OUTROS</strong><br>Atendemos a pedidos de materiais específicos de acordo com a viabilidade deles.</p>');
	});
});
