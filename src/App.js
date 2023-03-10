import { BadgeCheckIcon } from '@heroicons/react/solid'
import { Layout } from './components/Layout'

function App() {
  return (
    <Layout>
      <p className="my-5 text-xl font-bold">React18</p>
      <BadgeCheckIcon className="h-12 w-12 text-pink-500" />
    </Layout>
  )
}

export default App
