function isEqual(a, b) {
  if (a === b) {
      return true;
  }

  if (a == null || typeof(a) != "object" ||
      b == null || typeof(b) != "object")
  {
      return false;
  }

  let propertiesInA = 0, propertiesInB = 0;
  for (const property in a) {
      propertiesInA += 1;
  }
  for (const property in b) {
      propertiesInB += 1;
      if (!(property in a) || !isEqual(a[property], b[property])) {
          return false;        
      }
  }        
  return propertiesInA == propertiesInB;
}

export default isEqual