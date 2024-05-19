"use client"
import { useQuery } from '@tanstack/react-query';


export const fetchAuthors = async () => {
    const response = await fetch('/api/learn');
    const data = await response.json()
    return data;
};

const AuthorCard = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['ssr-key'],
        queryFn: fetchAuthors
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>An error occurred: {error.message}</p>;

    return (
        <div className="flex flex-wrap justify-center">
            {data?.map((author: any) => (
                <div key={author.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
                    <img className="w-full" src={author.image} alt={`Image of ${author.name}`} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{author.name}</div>
                        <p className="text-gray-700 text-base">{author.bio}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{author.location}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AuthorCard;
