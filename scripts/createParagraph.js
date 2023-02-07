export const createParagraph = (className) => {
  const paragraph = document.createElement("p");
  paragraph.className = `${className}`;
  return paragraph;
};
