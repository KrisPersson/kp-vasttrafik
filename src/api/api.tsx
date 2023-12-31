const BASE_URL = "https://ext-api.vasttrafik.se/pr/v4";

async function getApiToken() {
  try {
    const payload = new URLSearchParams();
    payload.append("grant_type", "client_credentials");
    const response = await fetch("https://ext-api.vasttrafik.se/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic Q3B5elh1ODI3RVZUWXJFNDZhX0dMWnBlYVBnYTo5TnJfUkxYV2JiYUdaSXZ6TU82eGlLa0lWSVVh",
      },
      body: payload,
    });
    if (response.status === 200) {
      const data = await response.json();
      return data.access_token;
    } else {
      throw Error();
    }
  } catch (error) {
    console.log(error);
  }
}

async function getResource(urlExtension: string) {
  try {
    const token = localStorage.getItem("access_token") || "";
    const response = await fetch(BASE_URL + urlExtension, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(token),
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else if (response.status === 401) {
      const newToken = await getApiToken();
      localStorage.setItem("access_token", JSON.stringify(newToken));
    } else {
      throw Error();
    }
  } catch (error) {
    console.log(error);
  }
}

export { getApiToken, getResource };
