
const resetForm = () => {
    //Reseta os campos preenchidos após cadastrar um item
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
  };

function enviar(){

   const email = "davy.nicacio@aluno.senai.br"
   const senha = "1234567"

   const emailpre = document.getElementById('email').value
   const senhapre = document.getElementById ('senha').value

   if(email === emailpre && senha === senhapre){

   }else{
    alert("Email incorreto ou senha incorreto")
    
   }

   if(senhapre === "" && emailpre === ""){
    alert("campo vazio")
   }else{
    
   }

}
   