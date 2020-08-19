export default {

    saveUsername(context, username) {
        context.commit('saveUsername', username)
    },

    addcount(context, count) {
        context.commit('addcount', count)
    },

    change(context, mubiao) {
        context.commit('change', mubiao)
    },
    sendname1(context, name1) {
        context.commit('sendname1', name1)
    },
    sendimg(context, img) {
        context.commit('sendimg', img)
    },

}