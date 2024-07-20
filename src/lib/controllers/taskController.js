export const fetchDataByID = async (id) => {
  const data = await fetch(`https://nxtodo.vercel.app/api/tasks/${id}`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin":"https://nxtodo.vercel.app"
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return data;
};

export const fetchAllData = async () => {
  const data = await fetch(`https://nxtodo.vercel.app/api/tasks`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin":"https://nxtodo.vercel.app"
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return data;
};

export const addData = async (body) => {
  const data = await fetch(`https://nxtodo.vercel.app/api/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin":"https://nxtodo.vercel.app" },
    body: JSON.stringify(body)
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return data;
};

export const updateData = async (body) => {
  const data = await fetch(`https://nxtodo.vercel.app/api/tasks`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin":"https://nxtodo.vercel.app" },
    body: JSON.stringify(body),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return data;
};

export const deleteData = async (body) => {
  const data = await fetch(`https://nxtodo.vercel.app/api/tasks`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin":"https://nxtodo.vercel.app" },
    body: JSON.stringify(body),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return data;
};
