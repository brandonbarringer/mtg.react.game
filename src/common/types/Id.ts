/* A general ID format type that enforces a prefix and a numeric part */
export type Id<T extends string> = `${T}-${number}`;
