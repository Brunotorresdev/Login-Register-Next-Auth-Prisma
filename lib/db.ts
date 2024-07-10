import { PrismaClient } from "@prisma/client";  //faz o intermedio entre a base e a aplicação

declare global {
    var cachedPrisma: PrismaClient //guarda conexao do prisma em cached
}

// se tiver em prod instancia o prisma client dentro de prisma, senao, vê se ta em cached e adiciona uma conexão pra ela e coloca oque estava no cached

// quando esta em prod o app carrega cria as conexoes e deixa disponivel, quando esatamos em dev, toda hora que salvamos o codigo fica dando reload

let prisma: PrismaClient
if(process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();

} else {
    if(!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient()
    }
    prisma = global.cachedPrisma
}
export const db = prisma;