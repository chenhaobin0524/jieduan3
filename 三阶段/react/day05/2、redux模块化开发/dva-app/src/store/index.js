// 引入转态管理
import { createStore } from 'redux';
// state={} 这是公共数据库
function counter(state = {
    searchText: '',
    Gallery: {
        // 预览图片的状态
        showGallery: 'none',
        // 预览图片地址
        imgUrl: ''
    }
}, action) {
    // action.type是那边设置带过来的，判断执行分支
    switch (action.type) {
        case 'SETSEARCHTEXT':
            return {
                // 继承原有数据
                ...state,
                // 修改数据
                searchText: action.searchText
            };
        case 'SETGALLERY':
            return {
                ...state,
                Gallery: action.Gallery
            }
        // 都没有时，默认返回原数据
        default:
            return state
    }
}

// 创建 Redux store 来存放应用的状态。
let store = createStore(counter);
// 导出公共库
export default store;