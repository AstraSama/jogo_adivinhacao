// gerar um número aleatório e pedir para o usuário descobrir
// usar o Math.floor(Matth.random() * 100)  gera um valor aleatório entre 0 e 1, e multiplica ele por 100
// o floor joga o número para o "chão" para evitar valores como 3.3333333331
// para ver a diferença pode-se usar o módulo Math.abs(-10), na qual a diferença é 10 nesse caso

let numero = Math.floor(Math.random() * 100 + 1 + 100);

let tentativa = 0;

console.log("\nJogo da adivinhação!\nTente descobrir o que o computador pensou entre 1 a 100.\nVocê têm 5 tentativas\nDigite um número: ");


process.stdin.on('data', function(data) {
    let descubra = data.toString().trim();

    if(Number(descubra) == numero) {
        process.stdout.write("----------------------------------------------------------------------\n\nParabéns você acertou!\n\n----------------------------------------------------------------------\n");
        process.exit();
    } else {
        process.stdout.write("----------------------------------------------------------------------\nErrou! ;-;");
        if(Number(descubra) > (numero - 10) && Number(descubra) < (numero) || Number(descubra) < (numero + 10) && Number(descubra) > (numero)) {
            process.stdout.write("\nSeu número está quente!\n")
        } else if(Number(descubra) < (numero - 10) || Number(descubra) > (numero + 10)) {
            process.stdout.write("\nSeu número está frio!\n")
        }
        console.log("Esta foi sua " + (tentativa + 1) + "* tentativa.\n----------------------------------------------------------------------");

        if(tentativa < 4) {
            process.stdout.write("\nTente novamente!\n");

            tentativa++;
        } else {
            process.stdout.write("----------------------------------------------------------------------\nVocê usou as cinco tentativas.\nVocê perdeu... ;-;\nO número era:" + numero +"\n----------------------------------------------------------------------\n----------------------------------------------------------------------\n");
            process.stdout.write("\nGostaria de jogar novamente?\nAperte 's' para sim e 'n' para não.\n");
            
        } if(descubra == "s") {
            process.stdout.write("\nJogo da adivinhação!\nTente descobrir o que o computador pensou entre 1 a 100.\nVocê têm 5 tentativas\nDigite um número: ");
            numero = Math.floor(Math.random() * 100 + 1);
            tentativa = 0;
        } else if(descubra == "n") {
            process.stdout.write("\nTudo bem.\nAté a próxima!\n");
            process.exit();
        }
    }
    
})
