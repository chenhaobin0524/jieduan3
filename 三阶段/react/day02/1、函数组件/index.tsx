(() => {
    //props或者插槽可以实现更改状态，父传子的方法
    // props的本质是函数从外界得到的参数
    // 组件的封装本质就是函数的封装
    // 该函数接收不同的值，就会返回不同的结果
    // 组件接收不同的props，就会返回不同的视图

    // 组件
    const Header = (props) => {
        // 点击事件
        return <header onClick={props.fn || null}
            // 写样式的格式 style={{}}
            style={{ backgroundColor: props.color ? props.color : 'red' }}>
            {props.title}{props.html || ''}
        </header>
    }
    
    const template = <div>
        {Header({ title: '微信' })}
        {/* 可以传函数、数组、对象、JSX结构等进去 */}
        <Header title='支付宝' color='blue' fn={() => { alert(1) }} html={<span>你好</span>} />
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})()
