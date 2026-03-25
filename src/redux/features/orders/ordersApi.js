// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import getBaseUrl from "../../../utils/baseURL";


// const ordersApi = createApi({
//     reducerPath: 'ordersApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: `${getBaseUrl()}/api/orders`,
//         credentials: 'include'
//     }),
//     tagTypes: ['Orders'],
//     endpoints: (builder) => ({
//         createOrder: (builder.mutation) ({
//             query: (newOrder) => ({
//                 url: "/",
//                 method: "POST",
//                 body: newOrder,
//                 credentials: 'include',
//             })
//         }),
//         getOrderByEmail: (builder.query) ({
//             query: (email) => ({
//                 url: `/email/${email}`
//             }),
//             providesTags: ['Orders']
//         })
//     })
// })

// export const {useCreateOrderMutation, useGetOrderByEmailQuery} = ordersApi;

// export default ordersApi;





// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import getBaseUrl from "../../../utils/baseURL";

// const ordersApi = createApi({
//     reducerPath: 'ordersApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: `${getBaseUrl()}/api/orders`,
//         // credentials: 'include'
//     }),
//     tagTypes: ['Orders'],
//     endpoints: (builder) => ({
//         createOrder: builder.mutation({
//             query: (newOrder) => ({
//                 url: "/",
//                 method: "POST",
//                 body: newOrder,
//             })
//         }),
//         getOrderByEmail: builder.query({
//             query: (email) => ({
//                 url: `/email/${email}`
//             }),
//             providesTags: ['Orders']
//         })
//     })
// })

// export const {
//     useCreateOrderMutation,
//     useGetOrderByEmailQuery
// } = ordersApi;

// export default ordersApi;



import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseURL";

const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/orders`,
    }),
    tagTypes: ['Orders'], // ✅ tag for automatic refetch
    endpoints: (builder) => ({
        // CREATE ORDER
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: "/",
                method: "POST",
                body: newOrder,
            }),
            invalidatesTags: ['Orders'], // 🔥 invalidate orders so UI refreshes automatically
        }),

        // GET ORDERS BY EMAIL
        getOrderByEmail: builder.query({
            query: (email) => `/email/${email}`,
            providesTags: ['Orders'], // 🔥 tag this query so mutation knows to refresh it
        }),
    })
})

export const {
    useCreateOrderMutation,
    useGetOrderByEmailQuery
} = ordersApi;

export default ordersApi;