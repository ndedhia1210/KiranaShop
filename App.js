import { useState } from "react";

import CategoryListScreen from "./app/views/screens/CategoryListScreen";
import LoginScreen from "./app/views/screens/LoginScreen";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn ? (
        <LoginScreen setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <CategoryListScreen />
      )}
    </>
  );
}
