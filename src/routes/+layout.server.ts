import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	// const { userId } = await getJwtAuthData(cookies);

  const gate = cookies.get('gate') ?? 'closed';

	return {gate };
};


