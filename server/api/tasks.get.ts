import type { Task } from '~/types';

export default defineEventHandler(async (): Promise<Task[]> => {
    return [
        {
            id: crypto.randomUUID(),
            title: 'Learn Vue',
            complete: false,
        },
        {
            id: crypto.randomUUID(),
            title: 'Learn Nuxt',
            complete: false,
        },
    ];
});