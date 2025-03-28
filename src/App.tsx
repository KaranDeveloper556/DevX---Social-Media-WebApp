import { Routes, Route } from "react-router-dom";
import SignInForm from "./_auth/forms/SignInForm";
import {
  Home,
  Explore,
  AllUsers,
  CreatePost,
  EditPost,
  Profile,
  UpdateProfile,
  PostDetails,
  Saved,
  LikedPost,
} from "./_root/pages";
import SignUpForm from "./_auth/forms/SignUpForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <main className=" relative h-screen flex">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/post/id" element={<PostDetails />} />
          <Route path="/porfile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
          <Route path="/update-prof" element={<LikedPost />} />
        </Route>
      </Routes>
      <ToastContainer />
    </main>
  );
};

export default App;
