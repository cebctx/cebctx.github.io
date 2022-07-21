const processStrings = (classArray, classes) => {
  const classesToProcess = [];
  for (const property in classArray) {
    if (classArray[property]) {
      classesToProcess.push(property);
    }
  }

  return `${classes} ${classesToProcess.join(' ')}`;
};

const classNames = (...classes) => {
  let finalClasses = '';
  if (classes.length === 0) {
    return finalClasses;
  }

  if (typeof(classes[0]) === 'string') {
    finalClasses = `${classes[0]} `;
  }

  if (classes.length === 1 && typeof(classes[0]) === 'object') {
    finalClasses = processStrings(classes[0], finalClasses);
  }

  if (classes.length === 2 && typeof(classes[1]) === 'object') {
    finalClasses = processStrings(classes[1], finalClasses);
  }

  return finalClasses;
};

export default classNames;
