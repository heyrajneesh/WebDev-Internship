let allUsers = [];

function fetchUsers() {
  const userList = document.getElementById("userList");
  const errorMsg = document.getElementById("error");
  userList.innerHTML = "Loading...";
  errorMsg.textContent = "";
  allUsers = [];

  fetch("https://randomuser.me/api/?results=10")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return res.json();
    })
    .then((data) => {
      allUsers = data.results;
      renderUsers(allUsers);
    })
    .catch((err) => {
      errorMsg.textContent = "Error loading users: " + err.message;
      userList.innerHTML = "";
    });
}

function renderUsers(users) {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <img src="${user.picture.medium}" alt="User Image" />
      <h3>${user.name.first} ${user.name.last}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
    `;
    userList.appendChild(card);
  });

  if (users.length === 0) {
    userList.innerHTML = "<p>No users found.</p>";
  }
}

function filterUsers() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = allUsers.filter((user) =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(query)
  );
  renderUsers(filtered);
}

function reloadUsers() {
  fetchUsers();
}

window.onload = fetchUsers;
