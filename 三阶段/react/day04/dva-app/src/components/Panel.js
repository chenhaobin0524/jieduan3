import React from 'react';
import axios from 'axios';
class Panel extends React.Component {
    // 构造器
    constructor(props) {
        super(props)
        // 存数据
        this.state = {
            news: [],
            bool: true
        }
    }
    componentDidMount() {
        let news = window.sessionStorage.getItem('news');
        // 如果无缓存发ajax，到服务器拿数据
        if (!news) {
            this.getdata();
        } else {
            // 如果有缓存从缓存拿数据
            this.setState({
                news: JSON.parse(window.sessionStorage.getItem('news'))
            })
        }
    }
    getdata() {
        axios.get('https://cnodejs.org/api/v1/topics').then((data) => {
            // 把数据存到sessionStorage
            window.sessionStorage.setItem('news', JSON.stringify(data.data.data))
            // 设置数据
            this.setState({
                news: [...this.state.news, ...data.data.data]
            })
        })
    }
    // react独有的生命周期，用于性能的优化
    // 介于虚拟dom和真实dom之间，关闭后没法更新
    shouldComponentUpdate() {
        if (this.state.bool) {
            // 可以更新
            return true
        } else {
            // 不可以更新
            return false
        }
    }
    renderNews(news) {
        if (news) {
            let arr = news.map((item, index) => {
                return (
                    <a key={index} className="weui-media-box weui-media-box_appmsg">
                        <div className="weui-media-box__hd">
                            <img className="weui-media-box__thumb" src={item.author.avatar_url} alt="" />
                        </div>
                        <div className="weui-media-box__bd">
                            <h4 className="weui-media-box__title">{item.title}</h4>
                            <p className="weui-media-box__desc">{item.author.loginname}</p>
                        </div>
                    </a>
                )
            })
            return arr
        } else {
            return <div>正在加载中...</div>
        }
    }

    render() {
        return (
            <div className="weui-panel weui-panel_access" style={{ marginBottom: '60px' }}>
                <div className="weui-panel__hd">图文组合列表</div>
                <div className="weui-panel__bd">
                    {this.renderNews(this.state.news)}
                </div>
                <div className="weui-panel__ft">
                    <a className="weui-cell weui-cell_access weui-cell_link">
                        <div onClick={this.getdata.bind(this)} className="weui-cell__bd">查看更多</div>
                        <span className="weui-cell__ft"></span>
                    </a>
                </div>
            </div>
        )
    }
    componentWillUnmount() {
        console.log('销毁');
        this.setState({
            bool: false
        })
    }
}
export default Panel;