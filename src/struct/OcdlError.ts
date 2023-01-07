export enum ErrorType {
  "INVALID_CONFIG" = "The config is invalid json type",
  "GET_USER_INPUT_FAILED" = "Error occurred while getting user input",
  "RESOLVE_JSON_FAILED" = "Error occurred while resolving res body to json",
  "DOWNLOAD_FAILED" = "Error occurred while downloading beatmapset",
  "GENERATE_OSDB_FAILED" = "Error occurred while generating .osdb",
  "REQUEST_DATA_FAILED" = "Error occurred while requesting data",
  "FOLDER_GENERATION_FAILED" = "Error occurred while generating folder",
  "FILE_NAME_EXTRACTION_FAILED" = "Error occurred while extracting file name",
  "MESSAGE_GENERATOR_FAILED" = "Error occurred while updating monitor",
  "CORRUPTED_RESPONSE" = "The api response is corrupted",
}

const getMessage = (type: keyof typeof ErrorType, error: any): string => {
  return `${new Date()} | [OcdlError]: ${type} - ${ErrorType[type]}\n${error}`;
};

export default class OcdlError extends Error {
  constructor(errorType: keyof typeof ErrorType, error: any) {
    super(getMessage(errorType, error));
  }
}
