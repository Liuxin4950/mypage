// src/stores/searchStore.js
import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
    state: () => ({
        selectedEngine: 'bing',
        query: ''
    }),
    actions: {
        setSelectedEngine(engine) {
            this.selectedEngine = engine;
        },
        setQuery(query) {
            this.query = query;
        },
        search() {
            let url = '';
            switch (this.selectedEngine) {
                case 'google':
                    url = `https://www.google.com/search?q=${this.query}`;
                    break;
                case 'bing':
                    url = `https://www.bing.com/search?q=${this.query}`;
                    break;
                case 'duckduckgo':
                    url = `https://duckduckgo.com/?q=${this.query}`;
                    break;
            }
            window.open(url, '_blank');
        }
    }
});
