import Routes from "./src/navigation/Route"
import {AuthProvider} from "./src/context/auth/AuthContext"
export default function App() {
  return (
    <AuthProvider>
    <Routes/>
    </AuthProvider>
  )
}