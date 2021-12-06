import { INewsProps, ISourceProps } from '../../types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller = new AppController();

    view = new AppView();

    start(): void {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) =>
                this.controller.getNews(e, (data: { articles: INewsProps[]; status: string; totalResults: number }) =>
                    this.view.drawNews(data)
                )
            );
        this.controller.getSources((data: { sources: ISourceProps[]; status: string }) => this.view.drawSources(data));
    }
}

export default App;
