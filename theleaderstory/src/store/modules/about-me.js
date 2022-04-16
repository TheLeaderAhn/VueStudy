export const about_me = {
    namespace: true,
    state: () => ({
        name:null,
        email:null,
    }),
    getter: {
        name: (state) => {
            return state.name
        },
        email : (state) => {
            return state.email
        },
    },
    mutations: {
        SET_DATA(state, date) {
            state[data.key] = data.value
        },
    },
    actions: {
        setAboutMeData: ({ commit, state }, data) =>{
            Object.keys(data).forEach((key) => {
                if(Object.keys(state).find((skey) => skey === key)) {
                    commit('SET_DATA', { key:key, value:data[key] })
                }
            })
        },
    },
    
}