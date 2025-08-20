export interface SchemaResponse {
  result: {
    resultCode: number;
    resultComment: string;
  };
  schema: SchemaData;
}

export interface SchemaData {
  name: string;
  text: string;
  color: string;
  elements: SchemaElement[];
}

export interface SchemaElement {
  name: string;
  text: string;
  type: 'text' | 'number';
}