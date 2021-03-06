import { IResolvers } from "graphql-tools"

const query: IResolvers = {
    Query: {
        hola(): string {
            return "Hola Mundo"
        },
        holaConNombre(__: void, { nombre }): string {
            return `Hola mundo ${nombre}`
        },
        holaAlCursoGraphQL(): string {
            return "Hola mundo en el curso de graphql"
        }


    }

}

export default query