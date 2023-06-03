const className = "Document";

const openAIModuleConfig = {
  model: "text-curie-001", // text-davinci-003 or text-curie-001
  maxTokens: 100,
  temperature: 0.0,
  topP: 1,
  frequencyPenalty: 0.0,
  presencePenalty: 0.0,
};

const schema = {
  class: className,
  properties: [
    {
      name: "title",
      dataType: ["text"],
    },
    {
      name: "body",
      dataType: ["text"],
    },
  ],
  moduleConfig: {
    "qna-openai": openAIModuleConfig,
  },
};

export { className, schema };
