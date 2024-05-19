import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from '@tanstack/react-query'
import AuthorCard, { fetchAuthors } from './components/author-data'


const Page = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['ssr-key'],
        queryFn: () => fetchAuthors()
    })

    console.log("checking server side data", dehydrate(queryClient))

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <AuthorCard />
        </HydrationBoundary>
    )
}

export default Page
