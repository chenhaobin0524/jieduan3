class Panel extends React.Component {
    // 构造器
    constructor(props) {
        super(props)
        // 存数据
        this.state = {
            news: []
        }
        // 请求数据
        axios.get('https://cnodejs.org/api/v1/topics').then((data) => {
            console.log(data);
            // 设置数据
            this.setState({
                news: data.data.data
            })
        })
    }
    renderNews(news) {
        let arr = news.map((item, index) => {
            return (
                <a key={index} className="weui-media-box weui-media-box_appmsg">
                    <div className="weui-media-box__hd">
                        <img className="weui-media-box__thumb" src={item.author.avatar_url} />
                    </div>
                    <div className="weui-media-box__bd">
                        <h4 className="weui-media-box__title">{item.title}</h4>
                        <p className="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                    </div>
                </a>)
        })
        return arr;
    }
    render() {
        return (
            <div className="weui-panel weui-panel_access">
                <div className="weui-panel__hd">图文组合列表</div>
                <div className="weui-panel__bd">
                    {this.renderNews(this.state.news)}
                </div>
                <div className="weui-panel__ft">
                    <a className="weui-cell weui-cell_access weui-cell_link">
                        <div className="weui-cell__bd">查看更多</div>
                        <span className="weui-cell__ft"></span>
                    </a>
                </div>
            </div>
        )
    }

}