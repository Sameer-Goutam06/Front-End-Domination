import {Navbar} from "./components/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Forms} from "./components/Forms";
import {User} from "./components/User";
import {NotFound} from "./components/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>  
      </BrowserRouter> 
    </>
  )
}

export default App