export interface Schema {
  name: string;
  text: string;
  color: string;
  elements: SchemaElements[];
}

export interface SchemaElements {
  name: string;
  text: string;
  type: string;
}