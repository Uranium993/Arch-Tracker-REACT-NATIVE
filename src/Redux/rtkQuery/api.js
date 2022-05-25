import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectList = createApi({
  reducerPath: "allProjects",
  tagTypes: ["Projects"],

  baseQuery: fetchBaseQuery({
    baseUrl: "https://glacial-chamber-62847.herokuapp.com/api",
    //baseUrl: "http://192.168.1.11:8080/api",
    //baseUrl: "http://192.168.0.29:8080/api",
  }),

  endpoints: (builder) => ({
    projects: builder.query({
      providesTags: ["Projects"],

      query: (token) => {
        let token1 = token;
        return {
          headers: {
            "Content-type": "application/json",
            "x-auth-token": token1,
          },
          url: "/projects",
        };
      },
    }),
    getSingleProject: builder.query({
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
      invalidatesTags: ["Projects"],
      query: ({ id, token, ...project }) => {
        console.log(token);
        return {
          url: `/projects/${id}`,
          method: "PATCH",
          body: project,
          headers: {
            "x-auth-token": token,
          },
        };
      },
    }),
    updatePhase: builder.mutation({
      invalidatesTags: ["Projects"],

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
      query: ({ token, id }) => {
        return {
          url: `/projects/${id}`,
          method: "PATCH",
          body: { inactive: true },
          headers: {
            "x-auth-token": token,
          },
        };
      },
    }),

    deleteProject: builder.mutation({
      invalidatesTags: ["Projects"],
      query: ({ token, id }) => {
        return {
          url: `/projects/${id}`,
          method: "DELETE",
          headers: {
            "x-auth-token": token,
          },
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
