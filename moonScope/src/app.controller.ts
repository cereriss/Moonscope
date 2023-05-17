import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  getAllIncomeReports() {
    return [];
  }

  @Get('')
  getAllIncomeReports2() {
    return [];
  }

  @Post('')
  createIncomeReport() {
    return 'Created income report';
  }

  @Put('')
  updateIncomeReport() {
    return 'Updated income report';
  }

  @Delete(':id')
  deleteIncomeReport() {
    return 'Deleted income report';
  }
}
