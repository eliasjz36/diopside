import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import Layout from './Layout'

const Loader = () => {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <AiOutlineLoading3Quarters className="mb-12 h-44 w-44 animate-spin text-lightgreen" />
        <p className="text-4xl text-skin">Website loading...</p>
      </div>
    </Layout>
  )
}

export default Loader
