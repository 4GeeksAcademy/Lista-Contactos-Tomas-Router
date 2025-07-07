// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import Contact from './pages/Contact';
import AddContact from "./pages/AddContact";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Contact />} />
      <Route path="/AddContact" element={<AddContact />} />
      <Route path="*" element={<h1>Not found!</h1>} />
    </>
  )
);