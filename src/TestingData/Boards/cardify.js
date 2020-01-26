export const cardify = (name) => {
    return { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), name, actions: [] }
}