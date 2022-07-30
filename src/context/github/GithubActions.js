import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_API_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// This is an instance of axios & we can make headers
// for this perticular instace
const gitHub = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// Search Users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await gitHub.get(`/search/users?${params}`);
  return response.data.items;
};

// Get user & repos by login
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  // Make multiple request we can use promise.all and pass in an array of requests
  const [user, repos] = await Promise.all([
    gitHub.get(`/users/${login}`),
    gitHub.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repos: repos.data };
};
