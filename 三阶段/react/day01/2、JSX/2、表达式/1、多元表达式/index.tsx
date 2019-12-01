(() => {
    // 定义数据类型
    interface Data {
        name: string,
        num: number
    }
    // 数据
    const data: Data = {
        name: 'chen',
        num: 1
    }
    // 虚拟dom
    const template = <div>
        {/* 元指变量个数 */}
        <p>1.三元表达式</p>
        {0 ? data.name : '假的'}
        <p>2.二元表达式</p>
        {data.name + '123'}
        <p>3.一元表达式</p>
        {data.num}
    </div>
    // 渲染节点
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();