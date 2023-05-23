import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  create(createTransactionDto: Prisma.TransactionsCreateInput) {
    return this.prisma.transactions.create({ data: createTransactionDto });
  }

  // `This action returns all transactions`
  findAll() {
    return this.prisma.transactions.findMany();
  }
  // This action returns a #${id} transaction
  findOne(id: number) {
    return this.prisma.transactions.findUnique({ where: { id } });
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
