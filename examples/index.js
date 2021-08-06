const { deriveInterfaceFromObject } = require('../index');
const { example } = require('./example');

deriveInterfaceFromObject(example).then((output) => {
  console.log(output);
});
