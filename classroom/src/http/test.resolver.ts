import { UseGuards } from '@nestjs/common';
import { Int, Query, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from 'src/database/auth/authorization.guard';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Resolver('test')
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => Int)
  @UseGuards(AuthorizationGuard)
  hello() {
    return 100;
  }
}
