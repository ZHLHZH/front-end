import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    userlist: [
        { name: 'May', newmsg:0,  msgList: [
                { from: 0, content: 'how are you', time: '12:45' },
                { from: 1, content: 'how are you2', time: '12:46' }
            ]},
        { name: 'lisa', newmsg:2,  msgList: [
                { from: 0, content: 'how are you as ', time: '15:45' },
                { from: 1, content: 'wtat how are you2 ok', time: '16:16' }
            ]},
    ],
    msglist: [
    ]
}

const actions = {
    sendinfo (context, value) {
        const date = new Date()
        const hour = date.getHours()
        const mins = date.getMinutes()
        const infodata = {
            from: 0,
            content: value,
            time: `${hour}:${mins}`
        }
        context.commit('SendInfo',infodata)
    },
    chooseruser (context, value) {
        // console.log(state.userlist)
        console.log(context,value)
        const userls = state.userlist.filter( (item) => {
            return item.name === value
        })
        console.log(userls)
        context.commit('ChooserUser', userls)

    }

}

const mutations = {
    SendInfo (state, value) {
        state.msglist.push(value)
    },
    ChooserUser (state, userls) {
        // state.msglist.clear()
        userls.forEach((item) => {
            state.msglist.push(item)
        })
    }
}

export default {
    namespaced: true,
    actions,
    mutations,
    state
}