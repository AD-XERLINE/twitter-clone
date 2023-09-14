import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined //create prisma/undefined
}

const client = globalThis.prisma || new PrismaClient() //check prisma has value if T=>prisma else create
if (process.env.NODE_ENV !== "production") globalThis.prisma = client
//check it is production?
export default client