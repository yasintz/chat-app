import * as z from 'zod';
import { createZodDto } from '@anatine/zod-nestjs';

const todoCreateSchema = z.object({
  text: z.string(),
});

export class TodoCreateDto extends createZodDto(todoCreateSchema) {}
