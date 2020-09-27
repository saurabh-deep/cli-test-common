/* eslint-disable no-cond-assign, no-loop-func */
const _ = require('lodash');

const getPlainObjectFromNativeError = (err) => {
  const error = {};
  if (err instanceof Error) {
    let obj = err;
    const props = [];
    do {
      Object.getOwnPropertyNames(obj).forEach((key) => {
        if (!props.includes(key) && key !== '__proto__' && typeof obj[key] !== 'function') {
          error[key] = obj[key];
          props.push(key);
        }
      });
    } while (obj = Object.getPrototypeOf(obj));
  }
  return error;
};

const processError = (inputError) => {
  let outputError = {
    message: '',
  };
  if (_.isPlainObject(inputError) && _.has(inputError, 'error')) {
    return processError(inputError.error);
  }
  if (inputError instanceof Error) {
    outputError = getPlainObjectFromNativeError(inputError);
  } else if (_.isPlainObject(inputError) && _.has(inputError, 'message')) {
    outputError = inputError;
  } else if (typeof inputError !== 'string') {
    const str = String(inputError);
    if (str !== '[object Object]') {
      outputError.message = str;
    } else {
      outputError.message = JSON.stringify(inputError);
    }
  } else {
    outputError.message = inputError;
  }
  return outputError;
};


module.exports = { processError };
