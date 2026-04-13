

let insumos=[]

function calcular(){
    
    let Produto=parseFloat(document.getElementById("valor_produto").value);
    let Embalagem=parseFloat(document.getElementById("valor_embalagem").value);
    let taxa_Fixa=parseFloat(document.getElementById("valor_fixo").value);
    let taxa_Comissao=parseFloat(document.getElementById("valor_comissao").value/100);
    let cupom=parseFloat(document.getElementById("valor_desconto").value/100);
    let taxa_Afiliado=parseFloat(document.getElementById("valor_afiliado").value/100);
    let impostos=parseFloat(document.getElementById("valor_impostos").value/100);
    let valor_venda=parseFloat(document.getElementById("porcent_Venda").value/100);

   if (isNaN(Produto)||isNaN(Embalagem)||isNaN(taxa_Fixa)||isNaN(taxa_Comissao)||isNaN(valor_venda)||isNaN(cupom)||isNaN(taxa_Afiliado)||isNaN(impostos)||isNaN(valor_venda)){
    
    alert("Preencha todos os campos corretamente para calcular o preço de venda.");
    
   

    document.getElementById("valor_produto").value="";
    document.getElementById("valor_embalagem").value="";
    document.getElementById("valor_fixo").value="";
    document.getElementById("valor_comissao").value="";
    document.getElementById("valor_desconto").value="";
    document.getElementById("valor_afiliado").value="";
    document.getElementById("valor_impostos").value="";
    document.getElementById("porcent_Venda").value="";

    document.getElementById("Venda").innerHTML="0.00";
    document.getElementById("lucro").innerHTML="0.00";
     
return;
   }

    let custo_base=Produto+Embalagem+taxa_Fixa;
    let Taxa_total=(taxa_Comissao+cupom+taxa_Afiliado+impostos);
    let custo_Total=custo_base/(1-Taxa_total);
    
    let Venda=(custo_Total*valor_venda)+custo_Total;
    let lucro=Venda-custo_Total;
   

    document.getElementById("Venda").innerHTML=Venda.toFixed(2);
    document.getElementById("lucro").innerHTML=lucro.toFixed(2);
}
function limpar(){
    document.getElementById("valor_produto").value="";
    document.getElementById("valor_embalagem").value="";
    document.getElementById("valor_fixo").value="";
    document.getElementById("valor_comissao").value="";
    document.getElementById("valor_desconto").value="";
    document.getElementById("valor_afiliado").value="";
    document.getElementById("valor_impostos").value="";
    document.getElementById("porcent_Venda").value="";

    document.getElementById("Venda").innerHTML="0.00";
    document.getElementById("lucro").innerHTML="0.00";
}
