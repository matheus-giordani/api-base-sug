import { Prisma, PrismaClient } from "@prisma/client";
import { Get, Route } from "tsoa";

@Route('usuario')
export default class UsuarioController {

    constructor(private prisma:PrismaClient) {}
    @Get()
        async getUsuario(): Promise<Prisma.UsuarioGetPayload<{}>[]> {
        return this.prisma.usuario.findMany()
    }
}