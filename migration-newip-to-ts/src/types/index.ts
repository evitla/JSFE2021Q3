export interface ISourceProps {
    id: string;
    category: string;
    name: string;
    description: string;
    country: string;
    language: string;
    url: string;
}

export interface INewsProps {
    source: { id: string; name: string };
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
}
