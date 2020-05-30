import qs from 'qs'
/**
 * @author: langwenqi
 * @describe: packaging page jump way as VueRouter
 */
const router = {

    /**
     * @author: langwenqi
     * @describe: location.href
     * @param {Object} obj | like:{path:'./index',query:{id:1}} | ifEncode
     * @param {Boolean} ifEncode | if the obj encodeURIComponent
     */

    push(obj = {}, ifEncode = false) {
        location.href = `${obj.path}${obj.query?'?'+qs.stringify(obj.query, {encode: ifEncode}):''}`
    },

    replace(obj = {}, ifEncode = false) {
        location.replace(`${obj.path}${obj.query?'?'+qs.stringify(obj.query, {encode: ifEncode}):''}`)
    },

    go(delta = -1) {
        window.history.go(delta)
    },

    back(delta = -1) {
        window.history.back(delta)
    },
    query(){
        const url = location.href.split('?')[1];
        return qs.parse(url?url:'')
    }
};
export default router;