import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): { message: string } {
    return {
      message:
        'Welcome to the Text Analyzer API! Use /analyze endpoint to analyze text.',
    };
  }
}
