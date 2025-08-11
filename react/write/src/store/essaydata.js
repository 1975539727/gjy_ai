import { create } from 'zustand';
import { getHotEssays } from '../api/essays';

export const useEssayStore = create((set, get) => ({
    essays: [],
    loading: false,
    fetchEssays: async () => {
        if (get().loading) return;
        set({ loading: true });
        try {
            const res = await getHotEssays();
            set({ essays: res.data.data, loading: false });
        } catch (error) {
            console.error('获取热门作文失败:', error);
            set({ loading: false });
        }
    }
}));