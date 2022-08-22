//Passando para o escopo local:
(function (){
  //capturando IDS: 
  var $addMovie = document.querySelector('#addMovie');
  var $btn = document.querySelector('#btn'); 
  var $movieList = document.querySelector('#movieList')
  var $itemsList = $movieList.querySelectorAll('li');  

  /*Passando eventos para click do botão e enter do teclado*/ 
  $btn.addEventListener('click', addInMovieList)
  $addMovie.addEventListener('keyup', pressEnter)
  
    $movieList.addEventListener('click', function(e){
       //se tags dentro da ul tiverem o nome "LI" faça: 
       if(e.target.nodeName === 'LI'){
         watchedMovie(e.target)//e.target == LI
         removeMovie(e.target)
       }
    }) 
    
    function removeMovie(li){
      if(confirm(`Deseja realmente excluir ${li.textContent}? `)){
        li.parentNode.removeChild(li); 
      }
    }

    //Função que adiciona classe com estilo de css à LI clicada 
    function watchedMovie(li){
     li.classList.toggle("done");
    }
  
  //função que adiciona filme como LI atravez de click
  function addInMovieList() {
    //criando <li></li> através do js: 
    var li = document.createElement('li');
    //criando variavel que recebe valor do input: 
    var text = document.createTextNode($addMovie.value);
    
    //Atribuindo valor do input na li
    li.appendChild(text); 
    //Atribuindo li na ul 
    $movieList.appendChild(li); 

    $addMovie.value = ""; 
    $addMovie.focus(); 
  }  

  //função que adiciona filme como LI atravez do enter
  function pressEnter(e){
    if(e.keyCode === 13){
      //chamando função que adiciona filme como LI
      addInMovieList(); 
    } 
  }
})()

 
