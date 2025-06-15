export const extractVariables = (text) => {
  const regex = /{{\s*([\w\d_]+)\s*}}/g;
  const matches = new Set();
  
  let match;

  while((match = regex.exec(text)) !==null){
    matches.add(match[1]);
  }

  return Array.from(matches);
}