/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient; // This must be a `var` and not a `let / const`
}

// Prevent multiple instances of Prisma Client in development
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma;
