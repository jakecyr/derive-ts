const { deriveInterfaceFromObject } = require('../index');
const { example } = require('./example');

const interfaceName = 'PlaceDetail';
const formatCode = true;
const subInterfaces = true;

deriveInterfaceFromObject(example, interfaceName, formatCode, subInterfaces).then((output) => {
  console.log(output);
});
