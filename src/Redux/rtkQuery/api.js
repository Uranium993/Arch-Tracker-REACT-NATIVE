import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const projectList = createApi({
  reducerPath: "allProjects",
  tagTypes: ["Projects", "Project"],

  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.11:8080/api",
  }),

  endpoints: (builder) => ({
    projects: builder.query({
      providesTags: ["Projects"],

      query: () => {
        return {
          headers: {
            "Content-type": "application/json",
          },
          url: "/projects",
        };
      },
    }),
    getSingleProject: builder.query({
      providesTags: ["Project"],
      query: (id) => {
        return {
          headers: {
            "Content-type": "application/json",
          },
          url: `/projects/${id}`,
        };
      },
    }),
    addProjectInfo: builder.mutation({
      query: ({ token, ...rest }) => {
        console.log(token);
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
      invalidatesTags: ["Projects"],
    }),
    editProjectInfo: builder.mutation({
      query: ({ id, project }) => {
        console.log(project);
        return {
          url: `/projects/${id}`,
          method: "PATCH",
          body: project,
        };
      },
    }),
    updatePhase: builder.mutation({
      invalidatesTags: ["Project"],

      query: ({ id, token, ...rest }) => {
        return {
          url: `/projects/update/${id}`,
          method: "PATCH",
          headers: {
            "Content-type": "application/json",

            "x-auth-token": token,
          },
          body: rest,
        };
      },
    }),

    archiveProject: builder.mutation({
      query: (id) => {
        return {
          url: `/projects/${id}`,
          method: "PATCH",
          body: { inactive: true },
        };
      },
    }),

    deleteProject: builder.mutation({
      invalidatesTags: ["Projects"],
      query: (id) => {
        console.log(id);
        return {
          url: `/projects/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useProjectsQuery,
  useUpdatePhaseMutation,
  useAddProjectInfoMutation,
  useEditProjectInfoMutation,
  useDeleteProjectMutation,
  useGetSingleProjectQuery,
  useArchiveProjectMutation,
} = projectList;

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
