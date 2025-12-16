import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Layout
import Layout from './components/layout/Layout'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Management from './pages/Management'
import GroupCompanies from './pages/GroupCompanies'
import Certifications from './pages/Certifications'
import CSRActivities from './pages/CSRActivities'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import Branches from './pages/Branches'
import Gallery from './pages/Gallery'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'

// Components
import ScrollToTop from './components/common/ScrollToTop'
import FloatingCTA from './components/common/FloatingCTA'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="management" element={<Management />} />
          <Route path="group-companies" element={<GroupCompanies />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="csr-activities" element={<CSRActivities />} />
          <Route path="products" element={<Products />} />
          {/* Detail route */}
          <Route path="products/:slug" element={<ProductDetail />} />
          {/* Category route (avoids collision with detail) */}
          <Route path="products/category/:category" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="branches" element={<Branches />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>

      <FloatingCTA />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
