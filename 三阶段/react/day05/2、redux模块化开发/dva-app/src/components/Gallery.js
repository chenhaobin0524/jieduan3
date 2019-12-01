// import React, { Component } from 'react';
// import store from '../store/index';

// class Gallery extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }

//     //   隐藏
//     hideGallery() {
//         store.dispatch({
//             type: 'SETGALLERY',
//             Gallery: {
//                 showGallery: 'none',
//                 imgUrl: ''
//             }
//         })
//     }
//     render() {
//         return (
//             <div className="weui-gallery" style={{ display: store.getState().Gallery.showGallery }}>
//                 <span className="weui-gallery__img" style={{
//                     backgroundImage: `url(${store.getState().Gallery.imgUrl})`
//                 }}></span>
//                 <div className="weui-gallery__opr">
//                     <a className="weui-gallery__del">
//                         <i onClick={this.hideGallery.bind(this)} className="weui-icon-delete weui-icon_gallery-delete"></i>
//                     </a>
//                 </div>
//             </div >
//         )
//     }
// }
// export default Gallery;

// 方法二
// 用react-redux 把原类组件写成高阶组件
// 现在组件要获取全局的仓库，必须使用`connect`把自身进阶高阶组件，
// 才有权力获取仓库的值
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect((state) => {
    return state
})(
    class Gallery extends Component {
        constructor(props) {
            super(props)
            console.log(this);

        }

        // //   隐藏
        hideGallery() {
            this.props.dispatch({
                type: 'SETGALLERY',
                Gallery: {
                    showGallery: 'none',
                    imgUrl: ''
                }
            })
        }
        render() {
            return (
                <div className="weui-gallery" style={{ display: this.props.Gallery.showGallery }}>
                    <span className="weui-gallery__img" style={{
                        backgroundImage: `url(${this.props.Gallery.imgUrl})`
                    }}></span>
                    <div className="weui-gallery__opr">
                        <a className="weui-gallery__del">
                            <i onClick={this.hideGallery.bind(this)} className="weui-icon-delete weui-icon_gallery-delete"></i>
                        </a>
                    </div>
                </div >
            )
        }
    }
)