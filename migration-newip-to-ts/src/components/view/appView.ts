import News from './news/news';
import Sources from './sources/sources';

import { INewsProps, ISourceProps } from '../../types';

export class AppView {
    news = new News();

    sources = new Sources();

    drawNews(data: { articles: INewsProps[]; status: string; totalResults: number }) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: { sources: ISourceProps[]; status: string }) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
