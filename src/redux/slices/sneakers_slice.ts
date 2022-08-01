import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ISneakers} from "../../interfaces/sneakers_interface";
import {sneakersService} from "../../services";
import {IFilter} from "../../interfaces/filter_interface";
import {IPoster} from "../../interfaces/poster_interface";


interface IState {
    sneakersList: ISneakers[],
    sum: number,
    commission: number,
    cartList: ISneakers[],
    searchList: ISneakers[],
    favoriteList: ISneakers[],
    sortMethods: string[],
    selectedMethod: string,
    isBought: boolean,
    posterList: IPoster[]

}

const getSneakersList = createAsyncThunk<ISneakers[], void>(
    'sneakersSlice/getSneakersList',
    async () => {
        const {data} = await sneakersService.getAll();
        return data;
    }
);
const searchSneakers = createAsyncThunk<ISneakers[], string>(
    'sneakersSlice/searchSneakers',
    async (query) => {
        const {data} = await sneakersService.getAll();
        return data.filter(value => value.name.toLowerCase().includes(query.toLowerCase()));
    }
);

const filterList = createAsyncThunk<ISneakers[], IFilter>(
    'sneakersSlice/filterList',
    async (filters) => {
        const {data} = await sneakersService.getAll();

        let list = data;

        if (!!filters.gender) {
            if (filters.gender === 'M') {
                list = list.filter(a => a.name.includes('Men\'s'));
            } else {
                list = list.filter(a => !a.name.includes('Men\'s'));
            }
        }

        if (!!filters.shoeSize) {
            if (filters.shoeSize !== 0) {
                list = list.filter(a => {
                    return a.maxSize >= filters.shoeSize && a.minSize <= filters.shoeSize;
                })
            }
        }

        if (!!filters.minPrice) {
            list = list.filter(a => a.price > filters.minPrice);
        }

        if (!!filters.maxPrice) {
            list = list.filter(a => a.price < filters.maxPrice);
        }

        return list;
    }
);

const initialState: IState = {
    sneakersList: [],
    sum: 0,
    commission: 0,
    cartList: [],
    searchList: [],
    favoriteList: localStorage.favoriteList===undefined?[]:JSON.parse(localStorage.favoriteList),
    sortMethods: ['alphabetic', 'min price', 'max price'],
    selectedMethod: 'alphabetic',
    isBought: false,
    posterList:[
        {id:0,imageUrl:'/img/slide.png'},
        {id:1,imageUrl:'/img/slide.png'},
        {id:2,imageUrl:'/img/slide.png'},
        {id:3,imageUrl:'/img/slide.png'},
        {id:4,imageUrl:'/img/slide.png'},
        {id:5,imageUrl:'/img/slide.png'}
    ]
};

const sneakersSlice = createSlice({
    name: 'sneakersSlice',
    initialState,
    reducers: {
        sort: (state) => {
            switch (state.selectedMethod) {
                case 'min price':
                    state.sneakersList = state.sneakersList.sort((a, b) => {
                        return a.price - b.price;
                    })

                    break;

                case 'max price':
                    state.sneakersList = state.sneakersList.sort((a, b) => {
                        return b.price - a.price;
                    })

                    break;

                case 'alphabetic':
                    state.sneakersList = state.sneakersList.sort((a, b) => {
                        if (a.name < b.name) {
                            return -1;
                        } else if (a.name > b.name) {
                            return 0
                        }
                        return 0
                    })

                    break;
            }
        },

        selectMethod: (state, action) => {
            state.selectedMethod = action.payload;
        },

        addProduct: (state, action) => {
            state.cartList.push(action.payload);
            state.sum += action.payload.price;
            state.commission = Math.floor(state.sum * 0.05);
            state.isBought = false;
        },

        removeProduct: (state, action) => {
            state.sum -= state.cartList[action.payload].price;
            state.cartList = state.cartList
                .filter(a => state.cartList.indexOf(a) !== action.payload);
            state.commission = Math.floor(state.sum * 0.05);
        },

        addToFavorite: (state, action) => {
            state.favoriteList.push(action.payload);

            localStorage.setItem('favoriteList',JSON.stringify(state.favoriteList));
        },

        removeFromFavorite: (state, action) => {
            state.favoriteList = state.favoriteList
                .filter(value => value.id !== action.payload.id);

            localStorage.setItem('favoriteList',JSON.stringify(state.favoriteList));
        },
        buy: (state) => {
            state.isBought = true;
            state.cartList = [];
            state.sum = 0;
            state.commission = 0;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSneakersList.fulfilled, (state, action) => {
                state.sneakersList = action.payload;
            })
            .addCase(searchSneakers.fulfilled, (state, action) => {
                state.sneakersList = action.payload;
            })
            .addCase(filterList.fulfilled, (state, action) => {
                state.sneakersList = action.payload;
            })
    }

});

const {
    reducer: sneakersReducer,
    actions: {
        addProduct,
        removeProduct,
        addToFavorite,
        removeFromFavorite,
        selectMethod,
        sort,
        buy
    }
} = sneakersSlice;

const sneakersActions = {
    getSneakersList,
    addProduct,
    removeProduct,
    searchSneakers,
    addToFavorite,
    removeFromFavorite,
    sort,
    selectMethod,
    filterList,
    buy
}

export {
    sneakersReducer,
    sneakersActions
}