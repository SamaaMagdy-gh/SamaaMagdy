import { useRecoilState, useRecoilValue } from "recoil"
import { favoriteAtom, counterAtom } from "./Atom"

export const useFavorite = () => {
    const [favorite, setFavorite] = useRecoilState(favoriteAtom)
    const count = useRecoilValue(counterAtom);
    
    const addFavorite = (item) => {
        const exists = favorite.find(fav => (fav.item?.id === item.id)    )
        
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
        return favorite.some(fav => (fav.item?.id === item.id) );
    }

    const removeFavorite = (item) => { 
     setFavorite(prev => prev.filter(fav => 
        (fav.item?.id !== item.id)
    ));
    
}

    
    return { favorite, setFavorite, count, addFavorite, isInFavorites , removeFavorite};

}



