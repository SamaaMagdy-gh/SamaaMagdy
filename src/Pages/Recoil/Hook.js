import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { favoriteAtom, counterAtom, searchQueryAtom, SelectedCategoryAtom, allRecipesAtom, filteredRecipesSelector } from "./Atom"

export const useFavorite = () => {
    const [favorite, setFavorite] = useRecoilState(favoriteAtom)
    const count = useRecoilValue(counterAtom);

    const addFavorite = (item) => {
        const exists = favorite.find(fav => (fav.item?.id === item.id))

        if (!exists) {

            setFavorite(prev => [...prev, { item, id: item.id }]);
        } else {

            setFavorite(prev => prev.filter(fav =>
                (fav.item?.id !== item.id)
            ));
        }

        return !exists;
    }

    const isInFavorites = (item) => {
        return favorite.some(fav => (fav.item?.id === item.id));
    }

    const removeFavorite = (item) => {
        setFavorite(prev => prev.filter(fav =>
            (fav.item?.id !== item.id)
        ));

    }


    return { favorite, setFavorite, count, addFavorite, isInFavorites, removeFavorite };

}
export const useRecipeFilter = () => {
    const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);
    const [selectedCategory, setSelectedCategory] = useRecoilState(SelectedCategoryAtom);
    const allRecipes = useRecoilValue(allRecipesAtom);
    const setAllRecipes = useSetRecoilState(allRecipesAtom);
    const filteredRecipes = useRecoilValue(filteredRecipesSelector);

    const updateSearchQuery = (query) => {
        setSearchQuery(query);
    };
    const updateSelectedCategory = (category) => {
        setSelectedCategory(category);
    }
    const loadaAllRecipes = (recipes) => {
        setAllRecipes(recipes);
    }
    const resetFilters = () => {
        setSearchQuery('');
        setSelectedCategory('All');
    };
    return {
        searchQuery,
        selectedCategory,
        allRecipes,
        filteredRecipes,
        updateSearchQuery,  
        updateSelectedCategory,
        loadaAllRecipes,
        resetFilters,
    };
}


