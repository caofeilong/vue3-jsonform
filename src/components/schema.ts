export type SchemaType = 'text' | 'num' | 'object' | 'array' | 'select'
export type Schema=Array<{
    field:string,
    type:SchemaType,
    label:string,
    properties?:Schema
    options?:Array<string>
}>
