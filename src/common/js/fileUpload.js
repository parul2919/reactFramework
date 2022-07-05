/**
 * Implements file upload by sending formData using browser fetch api
 * @param {string} url The URL to request; may include query string
 * @param {any} fileData Has to be formobject contains file url and if anyother required data
 * @param {boolean}isHeaderRequired to set true or false if header required or not.
 */

const upload = (url, fileData, bearerToken, onUploadProgress) => {
  const data = new FormData();
  data.append("hypothesis_id", fileData.hypothesis_id);
  data.append("file", fileData.file);
  const formData = new FormData();
  formData.append("file", fileData.file);
  formData.append("hypothesis_id", fileData.hypothesis_id);
  const headers = {
    ...(bearerToken && { Authorization: `Bearer ${bearerToken}` }),
  };

  return fetch(url, {
    method: "POST",
    headers,
    body: formData,
    onUploadProgress,
  });
};

export default upload;
