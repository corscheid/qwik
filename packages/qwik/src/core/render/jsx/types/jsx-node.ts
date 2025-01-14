/**
 * @public
 */
export interface FunctionComponent<P = Record<string, any>> {
  (props: P, key: string | null, flags: number): JSXNode | null;
}

export interface DevJSX {
  ctx: any;
  isStatic: boolean;
  fileName: string;
  lineNumber: number;
  columnNumber: number;
  stack?: string;
}

/**
 * @public
 */
export interface JSXNode<T = string | FunctionComponent> {
  type: T;
  props: T extends FunctionComponent<infer B> ? B : Record<string, any>;
  immutableProps: Record<string, any> | null;
  children: any | null;
  flags: number;
  key: string | null;
  dev?: DevJSX;
}
