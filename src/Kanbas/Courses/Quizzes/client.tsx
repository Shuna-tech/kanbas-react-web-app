import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const updateQuiz = async (quiz: any) => {
  const response = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return response.data;
};

export const deleteQuiz = async (quizId: string) => {
  const response = await axios.delete(`${QUIZZES_API}/${quizId}`);
  return response.data;
};

export const createQuiz = async (courseId: string, quiz: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
  console.log("Created new quiz: ", response);
  return response.data;
};

export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data;
};

//with token
//export const findQuizzesForCourse = async (courseId: string) => {
//  const token = localStorage.getItem("token");
//  const response = await axios.get(`${COURSES_API}/${courseId}/quizzes`, {
//    headers: {
//      Authorization: `Bearer ${token}`,
//    },
//  });
//  return response.data;
//};

//Note: for saveAndPublishQuiz
export const publishQuiz = async (quizId: string) => {
  const response = await axios.put(`${QUIZZES_API}/${quizId}/publish`);
  return response.data;
};

export const findQuizById = async (quizId: string) => {
  try {
    const response = await axios.get(`${QUIZZES_API}/quizzes/${quizId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz by ID:", error);
    throw error;
  }
};
