export default function setupAxios(axios: any, store: any) {
	axios.interceptors.request.use(
		(config: any) => {
			const {
				auth: { title },
			} = store.getState();

			if (title) {
				config.headers.Authorization = `${title}`;
			}
			console.log(title);
			return config;
		},
		(err: any) => Promise.reject(err)
	);
}
