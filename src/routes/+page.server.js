/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ fetch }) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');

	if (res.ok) {
		return {
			status: res.status,
			users: await res.json()
		};
	}

	return {
		status: res.status,
		error: new Error(`Could not load url`)
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());

		const res = await fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'POST',
			body: JSON.stringify(data)
		});

		if (res.ok) {
			return {
				status: res.status,
				message: 'Success'
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load url`)
		};
	}
};
