    
// Essa função serve para mudar a imagem do site e a cor da calculadora conforme o select
    function change(){
        let value = theme.value

        if(value == 1){
            document.getElementById('body').style.backgroundImage = "url(./img/matrixbg.png)"
            document.getElementById('container').style.backgroundColor = "rgba(0, 255, 0, 0.4)"
        }else if(value == 2){
            document.getElementById('body').style.backgroundImage = "url(./img/pinesbg.png)"
            document.getElementById('container').style.backgroundColor = "rgba(129, 119, 119, 0.4)"
        }else if(value == 3){
            document.getElementById('body').style.backgroundImage = "url(./img/onepiecebg.jpeg)"
            document.getElementById('container').style.backgroundColor = "rgba(238, 73, 73, 0.4)"
        }else if(value == 4){
            document.getElementById('body').style.backgroundImage = "url(./img/corinthiansbg.jpg)"
            document.getElementById('container').style.backgroundColor = "rgba(143, 143, 143, 0.4)"
        }
    }

// Limpa os inputs para ficarem vazios (tirar o 0)
        ipt_dec.value = ""
        ipt_bin.value = ""
        ipt_oct.value = ""
        ipt_hex.value = ""

        // Todas as funções seguem o mesmo padrão, pega o valor e a base, e converte para as outras bases. 
        // Usa o getElement para inserir no input o resultado.
        // Por que parseInt()? porque eu posso especificar a base do número que estou coletando.

        // O regex foi usado par validar entrada, peguei eles do regex101 e do stack overflow.

        function converterDec() {

            let num = parseInt(ipt_dec.value, 10)
            let regex = new RegExp("^[0-9]+$")
            let validar = regex.exec(num)

            if(validar){
                ipt_oct.value = num.toString(8);
                ipt_hex.value = num.toString(16);
                ipt_bin.value = num.toString(2);
            }else{
                ipt_dec.value = "";
            }

            
        }

        // Nessas funções a organização mudou para o regex validar o input em si, e se ele for inválido limpar a entrada, se for válido ele converte.
        // ^indica início, + para valer para cada caractere digitado, e $ sinaliza o fim dos dígitos

        function converterOct() {

            let ipt_num = ipt_oct.value
            let regex = new RegExp("^[0-7]+$")
            let validar = regex.test(ipt_num)
            // console.log(validar)
            if(validar){
                let num = parseInt(ipt_num, 8)
                ipt_dec.value = num.toString(10);
                ipt_hex.value = num.toString(16);
                ipt_bin.value = num.toString(2);
                
            }else{
                ipt_oct.value = "";
            }

            
        }
        function converterBin() {

            let ipt_num = ipt_bin.value
            let regex = new RegExp("^[0-1]+$")
            let validar = regex.test(ipt_num)
            
            if(validar){
                let num = parseInt(ipt_num, 2)
                ipt_oct.value = num.toString(8);
                ipt_hex.value = num.toString(16);
                ipt_dec.value = num.toString(10);
            }else{
                ipt_bin.value = "";
            }
            
        }
        function converterHex() {

            let ipt_num = ipt_hex.value
            let regex = new RegExp("^[0-9A-Fa-f]+$")
            let validar = regex.test(ipt_num)

            if(validar){
                let num = parseInt(ipt_num, 16)
                ipt_oct.value = num.toString(8);
                ipt_dec.value = num.toString(10);
                ipt_bin.value = num.toString(2);
            }else{
                ipt_hex.value = "";
            }

            
        }

        // Função pra limpar as entradas com clique no input, para não precisar apagar o que foi anteriormente digitado.

        function clean(){
            ipt_oct.value = "";
            ipt_dec.value = "";
            ipt_bin.value = "";
            ipt_hex.value = "";
        }
        

        ipt_dec.addEventListener("click", clean, true)
        ipt_bin.addEventListener("click", clean, true)
        ipt_oct.addEventListener("click", clean, true)
        ipt_hex.addEventListener("click", clean, true)

        // Listeners para detectar em que input o usuário está inserindo o valor, e chama a função adequada com base nisso
        ipt_dec.addEventListener("input", converterDec, true)
        ipt_hex.addEventListener("input", converterHex, true)
        ipt_bin.addEventListener("input", converterBin, true)
        ipt_oct.addEventListener("input", converterOct, true)

        
