type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

type EndpointType = 'everything' | 'top-headlines' | 'sources';

class Loader {
    baseLink: string;

    options: { [key: string]: string };

    constructor(baseLink: string, options: { [key: string]: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
        { endpoint, options = {} }: { endpoint: EndpointType; options: { [key: string]: string } },
        callback: (data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: { [key: string]: string }, endpoint: EndpointType): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(
        method: MethodType,
        endpoint: EndpointType,
        callback: (data: T) => void,
        options: { [key: string]: string } = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res): Promise<T> => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
