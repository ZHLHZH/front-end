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
    currentlist: {
        username: '',
        newmsg: 0,
        msglist: [],
    },
}

const actions = {
    sendinfo (context, value) {
        const date = new Date()
        const hour = date.getHours()
        const mins = date.getMinutes()
        const infodata = {
            from: 0,
            content: value[0],
            time: `${hour}:${mins}`
        }
        context.commit('SendInfo',[infodata, value[1]])
    },
    chooseruser (context, value) {
        // console.log(state.userlist)
        // console.log(context,value)

        const userls = state.userlist.filter( (item) => {
            return item.name === value
        })

        // console.log(userls)
        userls[0].newmsg = 0
        context.commit('ChooserUser', userls)

    }

}

const mutations = {
    SendInfo (state, value) {
        state.currentlist.msglist.push(value[0])
        const userls = state.userlist.filter( (item) => {
            return item.name === value[1]
        })
        userls[0].msgList.push(value[0])
    },
    ChooserUser (state, userls) {
        state.currentlist.msglist.splice(0,state.currentlist.msglist.length)
        // console.log(userls[0].msgList)
        userls[0].msgList.forEach((item) => {
            // console.log(item)
            state.currentlist.msglist.push(item)
        })
        state.currentlist.username = userls[0].name
    }
}

export default {
    namespaced: true,
    actions,
    mutations,
    state
}