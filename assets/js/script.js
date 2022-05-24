window.alert('Caixa de alerta.')


 //Placeholder normal
 document.write(`Seu salário é ${n1} </br>`)

 //colocando com duas casas decimais
 document.write(`Seu salário com duas casas decimais é ${n1.toFixed(2)} </br>`)
 
 //Duas casas deciamis e substituindo ponto por virgula
 document.write(`Seu sálario com vírgula é ${n1.toFixed(2).replace(".", ",")} </br>`)
 
 //Pegando o símbolo dinâmico da moeda - real
 document.write(`Em real: ${n1.toLocaleString( 'pt-BR', {style: 'currency', currency: 'BRL'}  ) }</br>`)
 
 //Dólar
 document.write(`Em real: ${n1.toLocaleString( 'pt-BR', {style: 'currency', currency: 'USD'} ) } </br> `)
  
 //Euro
  document.write(`Em real: ${n1.toLocaleString( 'pt-BR', {style: 'currency', currency: 'EUR'} ) } </br> `)