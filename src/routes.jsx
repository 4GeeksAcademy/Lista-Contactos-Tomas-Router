// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import Contact from './pages/Contact';
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Contact />} />
      <Route path="/AddContact" element={<AddContact />} />
      <Route path="/EditContact" element={<EditContact />} />
      <Route path="*" element={<h1>Not found!</h1>} />
    </>
  )
);