$(document).ready(function () {
    let socket = io("http://localhost:5000");
    socket.on("connect", function () {
        console.log("Conectado ao servidor");
    });

    socket.on("message", function (data) {
        console.log("Enviou uma mensagem");
        $("#chat-container").append($("<p>").text(data));
    });


    $("#botao").on("click", function () {
        console.log("Clicou no botão");
        socket.send($("#usuario").val() + ": " + $("#mensagem").val());
        $("#mensagem").val("")
    })
})