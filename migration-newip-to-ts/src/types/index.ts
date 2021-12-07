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

export interface ISourceData {
    sources: ISourceProps[];
    status: string;
}

export interface INewsData {
    articles: INewsProps[];
    status: string;
    totalResults: number;
}
