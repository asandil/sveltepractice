export const actions = {
    default: async ({request}) => {
const data = await request.formData();
const title = data.get('title');
console.log(title)
    }
}