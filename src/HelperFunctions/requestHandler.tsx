import axios from "axios";

type RequestType = {
  method: string;
  url: string;
  headers?: any;
  data?: any;
  isMultipart?: boolean;
};

export default async function requestHandler({
  method,
  url,
  headers,
  data,
  isMultipart,
}: RequestType) {
  return new Promise((resolve, reject) => {
    // Context
    const userToken = localStorage.getItem("giddaa-userToken");

    axios({
      method,
      url,
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": !isMultipart
          ? "application/json"
          : "multipart/form-data",
        ...headers,
      },
      data,
    })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
