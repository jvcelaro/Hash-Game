document.addEventListener("DOMContentLoaded", () =>{

    let f1 = document.querySelectorAll(".f1");

    f1.forEach((f1)=>{
        f1.addEventListener("click", handleclick);
    })
})

function handleclick(event){

    console.log(event.target);

    let f1 = event.target;
    let position = f1.id;

    if (handlemove(position)){

        setTimeout(()=>{
            alert(" O JOGO ACABOU - O Vencedor foi " + playerTime)
        }, 10);

    };
    updateSquares(position);
}

function updateSquares(position){
    let f1 = document.getElementById(position.toString());
    let symbols = board[position];
    f1.innerHTML = `<div class='${symbols}'></div>`

}

