export type UseRepositoryModelStruct<T> = {
    save: (data: T) => Promise<T>,
    update: (data: T) => Promise<T>,
    findById: (id: number) => Promise<T | null>,
    findAll: () => Promise<T[]>,
    deleteById: (id: number) => Promise<void>,
    initialized: boolean
};