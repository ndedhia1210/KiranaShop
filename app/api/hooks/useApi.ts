import { useState } from "react";

import { AsyncStatus } from "../../constants/enums";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [apiStatus, setApiStatus] = useState(AsyncStatus.Idle);

  const request = async (...args) => {
    setApiStatus(AsyncStatus.Loading);
    const response = await apiFunc(...args);

    setApiStatus(response.ok ? AsyncStatus.Succeeded : AsyncStatus.Failed);
    setData(response.data);
    return response;
  };

  return {
    request,
    data,
    error: apiStatus === AsyncStatus.Failed,
    loading: apiStatus === AsyncStatus.Loading,
  };
};

export default useApi;