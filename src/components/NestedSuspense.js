import { Suspense } from 'react'
import { Layout } from './Layout'
import { Spinner } from './Spinner'
import { FetchUsers } from './FetchUsers'
import { FetchTasks } from './FetchTasks'

export const NestedSuspense = () => {
  return (
    <Layout>
      <p className="mb-3 text-xl font-bold text-pink-500">Nested Suspense</p>
      <Suspense
        fallback={
          <>
            <p className="my-5 text-green-500">Showing outer skelton...</p>
            <Spinner />
          </>
        }
      >
        <FetchUsers />
        <Suspense
          fallback={
            <>
              <p className="my-5 text-pink-500">Showing inner skelton...</p>
              <Spinner />
            </>
          }
        >
          <FetchTasks />
        </Suspense>
      </Suspense>
    </Layout>
  )
}
