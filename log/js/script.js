function ocultar() {
    document.getElementById("loging").style.display = "none";
    document.getElementById("registrar").style.display = "block";
}

function crearUsuario (email,contra) {
    
    this.email=email;
    this.contra=contra;
    this.mostrarAlert= function() {
        return 'Email: '+ this.email+'\nContraseña: ' +this.contra;
    }
}
function validar() {
    var usuario = new crearUsuario(document.getElementById("mail").value,document.getElementById("pass").value);
    alert(usuario.mostrarAlert());
}
function cambiar_imagen(){
	var src1 = "img/lego.png";
	var src2 = "img/lego2.png";
	if($("#img1").attr("src") == src1){
		$("#img1").fadeOut();
		$("#img1").fadeIn();
		$("#img1").attr("src", src2);
	}else{
		$("#img1").fadeOut();
		$("#img1").fadeIn();
		$("#img1").attr("src", src1);
	}
}
$( function() {
    $( "#fec" ).datepicker();
  } );

$( function() {
    $( document ).tooltip({
        
    });
});
$( function() {
    $( "#crear" ).button();
} );
