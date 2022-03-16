import { ThemeProvider } from "./hooks/useTheme";

import Login from "./screens/Login";

export default function App() {
  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  );
}
