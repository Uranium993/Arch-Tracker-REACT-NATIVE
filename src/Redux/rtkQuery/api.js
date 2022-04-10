import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const projectList = createApi({
  reducerPath: "allProjects",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.11:8080/api",
  }),
  tagTypes: ["Projects"],
  endpoints: (builder) => ({
    projects: builder.query({
      query: () => "/projects",

      providesTags: [{ type: "Projects", id: "LIST" }],
    }),
    addProjectInfo: builder.mutation({
      query: ({ token, ...rest }) => {
        return {
          url: "/projects",
          method: "POST",
          headers: {
            "Content-type": "application/json",

            "x-auth-token": token,
          },
          body: rest,
        };
      },
    }),
    editProjectInfo: builder.mutation({
      query: (project) => ({
        url: "/projects",
        method: "PUT",
        body: project,
      }),
    }),
    updatePhase: builder.mutation({
      query: (data, projectID, phaseID) => ({
        url: `/projects/${projectID}/${phaseID}`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
        body: project,
      }),
    }),
  }),
});

// const api = axios.create({
//   baseURL: "http://192.168.1.11:8080/api",
//   headers: {
//     "Content-type": "application/json",
//     "x-auth-token":
//       "eyJhbGciOiJIUzI1NiJ9.RGpvbGU.bKnXgHgOVXOsQeyATlm9vN4ZBSm2OmigtG3dCPzgwDU",
//   },
// });

// export const getProjects = async (data) => {
//   const dataToString = JSON.stringify(data);
//   try {
//     const res = await api.post("/projects", dataToString);
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };
