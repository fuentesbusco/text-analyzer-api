import {
  IsBoolean,
  IsIn,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class AnalyzeTextDto {
  @IsString()
  @MinLength(1)
  text: string;

  @IsOptional()
  @IsIn(['en', 'es', 'fr', 'it', 'de', 'pt'])
  lang?: string;

  @IsOptional()
  @IsBoolean()
  extendedStopwords?: boolean;
}
