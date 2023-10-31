import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Main_image from "./components/Main_image";
import Navbar_1 from "./components/Navbar_1";
import Navbar_2 from "./components/Navbar_2";
import Signup from "./pages/Signup";
import Profile_card from "./components/Profile_card";
import Profile from "./pages/Profile";
import Profile_navbar from "./components/Profile_navbar";
import Reg_home from "./pages/Reg_home";
import Login from "./pages/Login";
import Booklist from "./pages/BookList";
import Book_sale_details from "./pages/Book_sale_details";
import { createContext, useState } from "react";
import Add_book_for_sell from "./components/Add_book_for_sell";
import Add_book_for_bid from "./components/Add_book_for_bid";
import Unreg_home from "./pages/Unreg_home";
import Author_profile from "./pages/Author_profile";
import PostView from "./pages/PostView";
import Have_ISBN from "./pages/Have_ISBN";
import AddBook_Main from "./pages/AddBook_Main";
import AddBook_Main_2 from "./pages/AddBook_Main_2";
import AddFor_Bid from "./pages/AddFor_Bid";
import AddFor_Sell from "./pages/AddFor_Sell";
import AddFor_Exchange from "./pages/AddFor_Exchange";
import AddFor_Donate from "./pages/AddFor_Donate";
import CreatePost from "./pages/CreatePost";
 
function App() {
  const isLoggedIn = true; //change this after authentication done

  const LoginContextProvider = ({ children }) => {
    const [logOrSignUp, setLogOrSignUp] = useState(true);
  };

  return (
    <div className="App bg-[#F5F5F5]">
      <div className="fixed top-0 w-full top"></div>
      <header className="header">
        {isLoggedIn ? <Navbar_2 /> : <Navbar_1 />}
      </header> 
      <main className="mt-[120px]">
        {/* <Main_image /> */}
        {/* <Signup /> */}
        {/* <Profile_card/> */}
        {/* <Profile/> */}
        {/* <Profile_navbar/> */}
        {/* <Add_book_for_sell/> */}
        {/* <Appk/> */}
        {/* <BookForm/> */}
        {/* {<Booklist/>} */}
        <Routes>
          {/* <Route path="/" element={<Add_book_for_bid />} /> */}
          <Route path="/login" element={<Login />} />
          {/* If you meant /signUp instead of /signup, change the path accordingly */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/Unreg_home" element={<Unreg_home/>}/>
          <Route path="/Author_Profile" element={<Author_profile/>}/>
          <Route path="/PostView" element={<PostView/>}/>
          <Route path="/" element={<Booklist/>}/>
          <Route path="/AddBook_Main" element={<AddBook_Main/>}/>
          <Route path="/AddBook_Main_2" element={<AddBook_Main_2/>}/>
          <Route path="/AddFor_Bid" element={<AddFor_Bid/>}/>
          <Route path="/AddFor_Sell" element={<AddFor_Sell/>}/>
          <Route path="/AddFor_Exchange" element={<AddFor_Exchange/>}/>
          <Route path="/AddFor_Donate" element={<AddFor_Donate/>}/>
          <Route path="/booksell_detail" element={<Book_sale_details/>}/>
          



          {/* Redirect to home page if no matching route is found */}
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

