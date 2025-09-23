import { atom, selector } from "recoil";

export const favoriteAtom = atom({
    key: 'favoriteAtom',
    default: [],
    effects_UNSTABLE: [
        ({ onSet, setSelf }) => {
            const savedValue = localStorage.getItem('favoriteAtom')
            if (savedValue != null) {
                setSelf(JSON.parse(savedValue))
            }
            onSet((newValue ,isReset) => {
                if(isReset){
                    localStorage.removeItem('favoriteAtom')
                }else{
                    localStorage.setItem('favoriteAtom', JSON.stringify(newValue))
                }
            })
        },
    ],

})
export const counterAtom= selector
({
    key: 'counterAtom',
    get: ({ get }) => {
        const favorite = get(favoriteAtom)
        return favorite.length
    }
})
export const searchQueryAtom = atom({
    key: 'searchQueryAtom',
    default: '',
});

export const SelectedCategoryAtom = atom({
    key: 'SelectedCategoryAtom',
    default: 'All',
});

export const allRecipesAtom = atom({
    key: 'allRecipesAtom',
    default: [],
});

export const filteredRecipesSelector = selector({
    key: 'filteredRecipesAtom',
    get: ({ get }) => {
        const allRecipes = get(allRecipesAtom);
        const selectedCategory = get(SelectedCategoryAtom);
        const searchQuery = get(searchQueryAtom).toLowerCase();

        let filteredRecipes = allRecipes;

        if (selectedCategory !== 'All') {
            filteredRecipes = filteredRecipes.filter(recipe => recipe.mealType && recipe.mealType.includes(selectedCategory));
        }
        if (searchQuery) {
            filteredRecipes = filteredRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
            recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase())||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return filteredRecipes;
    }
})


// export const  filterSelector= selector({
// key: 'counterAtom',
//     get: ({ get }) => {
//        const allProduct= get(SelectedCategoryAtom)
//        const selectedSearch= get(searchQueryAtom)
//        let filter=allProduct;

//        if(mealType!=='All'){
//         filter=filter.filter(item=>item.mealType===filter)
//        }
        
// if(selectedSearch){
//         filter=filter.filter(item=>item.name.toLowerCase().includes(selectedSearch.toLowerCase()))
//          }
//        return filter;
//     }

// })


