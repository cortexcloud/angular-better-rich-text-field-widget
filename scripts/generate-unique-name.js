const uuid = require('uuid');

const sanitizedUuid = uuid.v4().replace(/-/gi, '_');
/**
 * For each new build a separate name has to be generated
 * to avoid errors in the customElementsRegistry for the
 * webpack library name
 * @type {{output: {uniqueName: string, library: string}}}
 */
module.exports = {
  output: {
    uniqueName: 'webpackJsonpBetterWidgets_' + sanitizedUuid,
    library: 'betterWidgets_' + sanitizedUuid
  }
};
