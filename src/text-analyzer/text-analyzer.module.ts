import { Module } from '@nestjs/common';
import { TextAnalyzerController } from './text-analyzer.controller';
import { TextAnalyzerService } from './text-analyzer.service';

@Module({
  controllers: [TextAnalyzerController],
  providers: [TextAnalyzerService]
})
export class TextAnalyzerModule {}
