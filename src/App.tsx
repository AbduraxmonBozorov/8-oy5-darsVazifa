import { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import Detailes from "./pages/Detailes";

// Define context types
interface TokenContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

interface UserContextType {
  user: Record<string, unknown>;
  setUser: (user: Record<string, unknown>) => void;
}

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export const TokenContext = createContext<TokenContextType | undefined>(undefined);
export const UserContext = createContext<UserContextType | undefined>(undefined);
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [user, setUser] = useState<Record<string, unknown>>({});
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );
  const [data, setData] = useState<any[]>([]); // Replace 'any' with a proper type if known

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }

    fetch(`https://strapi-store-server.onrender.com/api/products?featured=true`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <TokenContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user, setUser }}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <Routes>
              <Route
                path="/"
                element={
                  <MainLayout theme={{ theme, setTheme }}>
                    <Home data={data} />
                  </MainLayout>
                }
              />
              <Route
                path="/about"
                element={
                  <MainLayout theme={{ theme, setTheme }}>
                    <About />
                  </MainLayout>
                }
              />
              <Route
                path="/products"
                element={
                  <MainLayout theme={{ theme, setTheme }}>
                    <Products />
                  </MainLayout>
                }
              />
              <Route
                path="/products/:id"
                element={
                  <MainLayout theme={{ theme, setTheme }}>
                    <Detailes />
                  </MainLayout>
                }
              />
              <Route
                path="/cart"
                element={
                  <MainLayout theme={{ theme, setTheme }}>
                    <Cart />
                  </MainLayout>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {token && (
                <>
                  <Route
                    path="/checkout"
                    element={
                      <MainLayout theme={{ theme, setTheme }}>
                        <Checkout />
                      </MainLayout>
                    }
                  />
                  <Route
                    path="/orders"
                    element={
                      <MainLayout theme={{ theme, setTheme }}>
                        <Orders />
                      </MainLayout>
                    }
                  />
                </>
              )}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </TokenContext.Provider>
    </div>
  );
};

export default App;
