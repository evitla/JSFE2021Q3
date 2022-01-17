import News from './news/news';
import Sources from './sources/sources';

import { INewsData, ISourceData } from '../../types';

export class AppView {
    news = new News();

    sources = new Sources();

    drawNews(data: INewsData): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ISourceData): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
