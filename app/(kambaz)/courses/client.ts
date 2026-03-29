import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
// const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};

export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return data;
  };

  export const deleteCourse = async (id: string) => {
    const { data } = await axios.delete(`${COURSES_API}/${id}`);
    return data;
  };

  export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/modules`,
      module
    );
    return response.data;
  };
  
  export const findModulesForCourse = async (courseId: string) => {
    const response = await axios
      .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
  };

  const MODULES_API = `${HTTP_SERVER}/api/modules`;
export const deleteModule = async (moduleId: string) => {
 const response = await axios.delete(`${MODULES_API}/${moduleId}`);
 return response.data;
};

export const updateModule = async (module: any) => {
    const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
    return data;
  };
  

  export const updateCourse = async (course: any) => {
    const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
    return data;
  };

  export const findAssignmentsForCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
    return data;
  };
  export const createAssignment = async (courseId: string, assignment: any) => {
    const { data } = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return data;
  };
  export const updateAssignment = async (assignment: any) => {
    const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
  };
  export const deleteAssignment = async (assignmentId: string) => {
    await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  };

  export const enrollInCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses/${courseId}`);
    return data;
  };
  
  export const unenrollFromCourse = async (courseId: string) => {
    await axiosWithCredentials.delete(`${USERS_API}/current/courses/${courseId}`);
  };

  console.log("HTTP_SERVER:", process.env.NEXT_PUBLIC_HTTP_SERVER);
  
  
  
