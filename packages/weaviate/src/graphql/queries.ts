export const generateSearchQuery = (prompt: string, generative: boolean) =>
  generative
    ? `
query SearchQuery {
  Get {
    Document(nearText: {
      concepts: ["${prompt}"]
    }) {
      title
      body
      _additional {
        id
        certainty
        generate(
          groupedResult: {
            task: "${prompt}"
          }
        ) {
          groupedResult
          error
        }
      }
    }
  }
}
`
    : `
query SearchQuery {
  Get {
    Document(nearText: {
      concepts: ["${prompt}"]
    }) {
      title
      body
      _additional {
        id
        certainty
      }
    }
  }
}
`;
