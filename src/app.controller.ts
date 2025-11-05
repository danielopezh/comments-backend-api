import { Controller, Get, Post, Body } from '@nestjs/common';
import axios from 'axios';

const DATA_SERVICE = process.env.DATA_SERVICE_URL || 'http://backend-data-service:3001';

@Controller('api')
export class AppController {
  @Get('comments')
  async getComments() {
    const { data } = await axios.get(`${DATA_SERVICE}/data/comments`);
    return data;
  }

  @Post('comments')
  async createComment(@Body() body: any) {
    const { data } = await axios.post(`${DATA_SERVICE}/data/comments`, body);
    return data;
  }

  @Get('health')
  health() {
    return { status: 'ok' };
  }
}
