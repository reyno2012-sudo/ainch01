export type Tool = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    tags: string[];
};

export type Category = 'All' | 'Chat' | 'Design' | 'Dev' | 'Search' | 'Writing';
