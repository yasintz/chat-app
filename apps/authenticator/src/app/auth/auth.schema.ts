import * as z from 'zod';
import { createZodDto } from '@anatine/zod-nestjs';

const userSignupSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export class UserSignupDto extends createZodDto(userSignupSchema) {}

