import type { Task } from '~/types';

interface TaskResponse {
    task: Task
}

export default defineEventHandler(async (event): Promise<TaskResponse> => {
    // better practice to use readValidatedBody here instead of readBody
    // but didn't want to have to install zod or some other validation library
    // for this example project
    const body = await readBody(event);

    if (!body.title.trim()) {
        throw createError({
            statusCode: 422,
            statusMessage: 'Title is required',
        });
    }

    console.log('creating task: ', body);

    const task = {
        id: crypto.randomUUID(),
        title: body.title.trim(),
        complete: false,
    };

    return { task };
});