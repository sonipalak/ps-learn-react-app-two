import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import NoMatch from './components/NoMatch';
import News from './components/news/News';
import Product from "./components/products/Product";

export default function App(props) {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news/*" element={<News />} />
          <Route path="products/*" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

