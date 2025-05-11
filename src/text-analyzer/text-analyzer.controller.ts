import { Body, Controller, Post } from '@nestjs/common';
import { AnalyzeTextDto } from './dto/analyze-text.dto';
import { TextAnalyzerService } from './text-analyzer.service';

@Controller('analyze')
export class TextAnalyzerController {
  constructor(private readonly analyzerService: TextAnalyzerService) {}

  @Post()
  analyzeText(@Body() dto: AnalyzeTextDto) {
    const lang = dto.lang ?? 'en';
    const extended = dto.extendedStopwords ?? false;
    return this.analyzerService.analyze(dto.text, lang, extended);
  }
}
