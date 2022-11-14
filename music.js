window.addEventListener("keydown",(e)=>{

    let t = e.key.toUpperCase();
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=randomColor;
    var mus = new Audio(t+".mp3");
        mus.play();
    
    
})
