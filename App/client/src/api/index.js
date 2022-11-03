import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getMyQuizzes = (userID) =>
  API.get(`/quizzes/createdQuizzes?user=${userID}`);
// export const createPost = (newPost) => API.post("/posts", newPost);
// export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
// export const updatePost = (id, updatedPost) =>
//   API.patch(`/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);

export const createQuiz = (quiz) => API.post("/quizzes/createQuiz", quiz);

export const getAttemptQuizzes = (userID) =>
  API.get(`/quizzes/attemptQuizzes?user=${userID}`);
