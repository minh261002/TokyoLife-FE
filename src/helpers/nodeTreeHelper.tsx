export const generate_text_depth_tree = (depth: number, word = "|--") => {
  return word.repeat(depth);
};
