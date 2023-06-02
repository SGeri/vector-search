import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    OPENAI_APIKEY: z.string().min(1),
  },

  client: {},

  runtimeEnv: {
    OPENAI_APIKEY: process.env.OPENAI_APIKEY,
  },
});
