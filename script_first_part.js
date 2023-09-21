function plusbtn(){
    let numeroLikes = document.querySelector("#btnlike")
    let sumaLikes = numeroLikes.innerText;
    sumaLikes++;
    numeroLikes.innerText = sumaLikes;
}