
export default function Post({params}: {params: IPost}) {
    return (
        <main>
            <h2>Post: {params.id}</h2>
        </main>
    )
}