// SCript para distribuir os valores que estao em lista em formato de lista legivel para os usuarios

// let ID_Disciplina = {{id_disciplina}};          
// let Presenca = {{presenca_aula}};  
// let horario = {{horario}};     
// let ID = {{id}}; 


function obterLista() {
  let resultado = "";  


  for (let i = 0; i < ID.length; i++) {
    resultado += `#######: ${ID_Disciplina[i]}\n`;
    resultado += `#######: ${Presenca[i]}\n`;
    resultado += `#####: ${data[i]}\n`;
    resultado += `######: ${horario[i]}\n`;
    resultado += `####: ${ID_Falta[i]}\n`;
    resultado += "\n"; 
  }

  return resultado; 
}


let teste = obterLista();

return teste;