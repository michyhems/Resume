import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Introduction from "./pages/intro";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Projects from "./pages/projects";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout></Layout>}>
                        <Route
                            exact
                            path="/Resume"
                            element={<Introduction></Introduction>}
                        ></Route>
                        <Route
                            exact
                            path="/education"
                            element={<Education></Education>}
                        ></Route>
                        <Route
                            exact
                            path="/experience"
                            element={<Experience></Experience>}
                        ></Route>
                        <Route
                            exact
                            path="/projects"
                            element={<Projects></Projects>}
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
