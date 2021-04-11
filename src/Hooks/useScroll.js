import { useEffect, useCallback } from 'react'

const useScroll = (ref, dispatch) => {
    const scrollObserver = useCallback(
    node => {
        new IntersectionObserver(([entry]) => {
            if(entry.intersectionRatio > 0) {
                dispatch({type: 'ADVANCE_PAGE'})
            }
        // entries.forEach(en => {
        //     if (en.intersectionRatio > 0) {
        //     dispatch({ type: 'ADVANCE_PAGE' });
        //     }
        // });
        }).observe(node);
    },
    [dispatch]
    );

    useEffect(() => {
    if (ref.current) {
        scrollObserver(ref.current);
    }
    }, [scrollObserver, ref]);
}

export default useScroll