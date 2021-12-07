import { INewsData, ISourceData } from '../../types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller = new AppController();

    view = new AppView();

    start(): void {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) =>
                this.controller.getNews(e, (data: INewsData) => this.view.drawNews(data))
            );
        this.controller.getSources((data: ISourceData) => this.view.drawSources(data));
    }
}

export default App;
