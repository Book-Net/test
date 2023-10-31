import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Main_image from "./components/Main_image";
import Navbar_1 from "./components/Navbar_1";
import Navbar_2 from "./components/Navbar_2";
import Signup from "./pages/Signup";
import Profile_card from "./components/Profile_card";
import Profile from "./pages/Profile";
import Edit_profile from "./pages/Edit_profile";
import Place_bid from "./pages/Place_bid";
import Sidebar_admin from "./pages/Sidebar_admin";
import Login from "./pages/Login";
import Booklist from "./pages/BookList";
import Book_sale_details from "./pages/Book_sale_details";
import { createContext, useState } from "react";
import Unreg_home from "./pages/Unreg_home";
import Author_profile from "./pages/Author_profile";
import PostView from "./pages/PostView";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import BookList from "./pages/BookList";
import BookSellDetails from "./pages/Book_sale_details";
import AddBook_Main from "./pages/AddBook_Main";
import AddBook_Main_2 from "./pages/AddBook_Main_2";
import Add_book_for_bid from "./components/Add_book_for_bid";
import CreatePost from "./pages/CreatePost"

// import Logout from "./components/Logout";



// context api
// import { AuthProvider } from "./context/AppContext";
// import { useAuth } from "./context/AppContext";
import checkout_success from "./components/Checkout_success";
// import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:9000";
axios.defaults.withCredentials = true;

function App() {
  const isLoggedIn = true; //change this after authentication done

  const { user } = useAuth();
  axios.defaults.headers.common["x-access-token"] = user;
  return (
    <div className="App bg-[#F5F5F5]">
<<<<<<<<< Temporary merge branch 1
      <div className="fixed top-0 w-full top"></div>
      <header className="header">
        <Navbar_1 />
      </header>
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      <main className="mt-[120px]">
        <Routes>
<<<<<<<<< Temporary merge branch 1
          <Route path="*" element={<Signup />} />
          <Route path="/" element={<PostView />} />
=========
       <div className="fixed top-0 w-full top"></div> 
       <header className="header">
        {isLoggedIn ? <Navbar_2 /> : <Navbar_1 />}
      </header> */
      <main className="mt-[120px]">
        {/* <Main_image /> */}
        {/* <Signup /> */}
        {/* <Profile_card/> */}
        {/* <Profile/> */}
        {/* <Profile_navbar/> */}
        {/* <Add_book_for_sell/> */}
        {/* <Appk/> */}
        {/* <BookForm/> */}
        <Routes>
          {/* <Route path="/" element={<Add_book_for_bid />} /> */}
>>>>>>>>> Temporary merge branch 2
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Author_profile" element={<Author_profile />} />
          <Route
            path="/add_book"
            element={user ? <AddBook_Main /> : <Navigate to="/login" />}
          />
          <Route
            path="/add_book_2"
            element={user ? <AddBook_Main_2 /> : <Navigate to="/login" />}
          />
          <Route
            path="/have_isbn"
            element={user ? <Have_ISBN /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<BookList />} />
          {/* <Route path="/sell_book" element={<Sellbook />} /> */}
          <Route path="/bid_sell" element={<BidSell />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/add_book" element={<Logout />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

