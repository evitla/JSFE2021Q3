import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '7cc6142d0a2c4fc49f2c835b24c3118c',
        });
    }
}

export default AppLoader;
