export const fetchDataByID = async (id) => {
  const data = await fetch(`${process.env.BASE_URL}/api/tasks/${id}`, {
    method: "GET",
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
  const data = await fetch(`${process.env.BASE_URL}/api/tasks`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return data;
};

export const addData = async (body) => {
  const data = await fetch(`${process.env.BASE_URL}/api/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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

export const updateData = async (body) => {
  const data = await fetch(`${process.env.BASE_URL}/api/tasks`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
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
  const data = await fetch(`${process.env.BASE_URL}/api/tasks`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
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
