import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([

]);


export default clerkMiddleware((auth, req) => {
    console.log("req", req)
    if (isProtectedRoute(req)) auth().protect();
});


export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};


// import { clerkMiddleware, createRouteMatcher, auth } from "@clerk/nextjs/server";
// import { NextResponse } from 'next/server';

// const isProtectedRoute = createRouteMatcher([
// ]);

// const afterAuth = (authData: any, req: any) => {
//     if (authData.userId && authData.isPublicRoute) {
//         let path = "/select-org";

//         if (authData.orgId) {
//             path = `/organization/${authData.orgId}`;
//         }

//         const orgSelection = new URL(path, req.url);
//         return NextResponse.redirect(orgSelection);
//     }

//     if (!authData.userId && !authData.isPublicRoute) {
//         return auth().redirectToSignIn({
//             returnBackUrl: req.url,
//         });
//     }

//     if (authData.userId && !authData.orgId && req.url !== "/select-org") {
//         const orgSelection = new URL('/select-org', req.url);
//         return NextResponse.redirect(orgSelection);
//     }
// };

// export default clerkMiddleware((auth, req) => {
//     if (isProtectedRoute(req)) {
//         const response = afterAuth(auth, req);
//         if (response) return response;
//     }
// });

// export const config = {
//     matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
