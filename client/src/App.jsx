import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

// App = the overall frame of the site: header, then page content, then footer.
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}
