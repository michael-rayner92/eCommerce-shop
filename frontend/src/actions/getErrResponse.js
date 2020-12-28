const getErrResponse = error => {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  return error.message;
};

export default getErrResponse;
