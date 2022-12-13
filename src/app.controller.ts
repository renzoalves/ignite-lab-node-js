// CONTROLLER: DEFINE AS ROTAS DA APLICAÇÃO

import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}

/*
// ----------------------------------------------------------------------
// Entendendo o Controller //
// ----------------------------------------------------------------------

Se( @Controller('app') ) Então
  >> A rota deverá iniciar com 'app'
Fim-se.

Se( @Controller('app') ) Então
  Se( @Get('hello') ) Então
    >> A rota deverá ser: 'app/hello'
  Fim-se.

Fim-se.

*/
