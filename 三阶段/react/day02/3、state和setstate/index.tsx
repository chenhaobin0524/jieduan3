(() => {
    class Tool extends React.Component {
        //M层
        // 相当于vue里面的data，
        // 这里必须命名为state
        state: {
            name: string,
            skill: string[]
        } = {
                name: 'yao',
                skill: ['ps', 'js']
            }
        constructor(props) {
            super(props);
            // 跟上面的写法一样，数据层
            // this.state = {
            //     name: 'yao',
            //     skill: ['ps', 'js']
            // }
        }
        test() {
            console.log(this);
            this.setState({
                name: 'lin',
                skill: ['abc']
            })
        }
        //V视图层
        render() {
            // bind(this) 修正this指向
            return (<div onClick={this.test.bind(this)} >{this.state.name} skill：{this.state.skill[0]}</div>)
        }
    }
    ReactDOM.render(
        <div>
            <Tool />
        </div>,
        document.querySelector('#demo')
    )
})()