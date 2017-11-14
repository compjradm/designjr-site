$(document).ready(function(){
   $('#lista-item1').click(function(){
      $('li.font500').removeClass('font500').addClass('font100');
      $(this).addClass('font500');
      $('#lista-funcionamento-descricao').replaceWith('<p id="lista-funcionamento-descricao">Se você está interessado em contratar um serviço nosso, mande um email para nossa empresa ou nos ligue!</p>');
   });
   $('#lista-item2').click(function(){
      $('li.font500').removeClass('font500').addClass('font100');
      $(this).addClass('font500');
      $('#lista-funcionamento-descricao').replaceWith('<p id="lista-funcionamento-descricao">Vamos marcar uma reunião e conversar um pouco sobre o que você precisa para o seu projeto/empresa.</p>');
   });
   $('#lista-item3').click(function(){
      $('li.font500').removeClass('font500').addClass('font100');
      $(this).addClass('font500');
      $('#lista-funcionamento-descricao').replaceWith('<p id="lista-funcionamento-descricao">Agora que sabemos o que você quer, nos conte todos os detalhes sobre os materiais que iremos desenvolver. Toda informação é útil para que possamos fazer o projeto de acordo com suas ideias!</p>');
   });
   $('#lista-item4').click(function(){
      $('li.font500').removeClass('font500').addClass('font100');
      $(this).addClass('font500');
      $('#lista-funcionamento-descricao').replaceWith('<p id="lista-funcionamento-descricao">Vamos falar de dinheiro. Sabemos o que você quer fazer e como quer feito, então te passaremos um orçamento. Se o seu projeto for social, não se preocupe, não iremos cobrar! Caso contrário, nossos valores estão beem abaixo do mercado, e também podemos propor uma permuta (troca) de serviços.</p>');
   });
   $('#lista-item5').click(function(){
      $('li.font500').removeClass('font500').addClass('font100');
      $(this).addClass('font500');
      $('#lista-funcionamento-descricao').replaceWith('<p id="lista-funcionamento-descricao">Já que está tudo acertado entre nós, vamos assinar um contrato para garantir ambas as partes. Assim, ninguém sai prejudicado e garantimos o cumprimento dos prazos e dos pagamentos.</p>');
   });
   $('#lista-item6').click(function(){
      $('li.font500').removeClass('font500').addClass('font100');
      $(this).addClass('font500');
      $('#lista-funcionamento-descricao').replaceWith('<p id="lista-funcionamento-descricao">Pronto! A partir de agora iremos dar início ao desenvolvimento do seu projeto.</p>');
   });
});
