import { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import App from "@/pages/App";
import { Home } from "@/pages/Home";
import HomeSuspension from "@/pages/Home/Suspension/HomeSuspension";
import { Reviews } from "@/pages/Reviews";
import { Contacts } from "@/pages/Contacts";
import { AllTours } from "@/pages/AllTours";

export default function createRouter(): RouteObject {

    const homeRoute = {
        path: "/",
        element: 
        <Suspense fallback={<HomeSuspension />}>
            <Home />
        </Suspense>
    }

    const reviewsRoute = {
        path: "/reviews",
        element: 
        <Suspense fallback={"Loading..."}>
            <Reviews />
        </Suspense>
    }

    const contactsRoute = {
        path: "/contacts",
        element: 
        <Suspense fallback={"Loading..."}>
            <Contacts />
        </Suspense>
    }

    const allToursRoute = {
        path: "/all-tours",
        element: 
        <Suspense fallback={"Loading..."}>
            <AllTours />
        </Suspense>
    }

    return {
        path: "/",
        element: <App />,
        children: [
          homeRoute,
          reviewsRoute,
          contactsRoute,
          allToursRoute,
        ]
    }
}