const className = "Document";

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
};

export { className, schema };
