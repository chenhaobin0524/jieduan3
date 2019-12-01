(() => {
    interface Data {
        name: string,
        num: number,
        style: {
            fontSize: string,
            color: string,
        }
    }
    const data: Data = {
        name: 'chen',
        num: 23,
        style: {
            fontSize: '30px',
            color: 'red'
        }
    }
    // JSX语法
    const template = <div>
        <p>属性值</p>
        <p age='18' kkk={data.num} name={0 ? data.name : '假的'}>
            {0 ? data.name : '假的'}
        </p>

        <p>属性值 class</p>
        <p className={0 ? 'active' : 'noactive'}>
            {0 ? data.name : '假的'}
        </p>
        {/* style 属性的值接收一个对象，
        css 的属性必须为驼峰写法 style={{“backgroundColor”:”#f60”}} */}
        <p>属性值 style</p>
        <p style={
            {
                fontSize: `${data.num}px`,
                color: 'red'
            }
        }>
            {0 ? data.name : '假的'}
        </p>

        <p style={data.style}>
            {0 ? data.name : '假的'}
        </p>

    </div>
    // 渲染到节点demo上
    const el = document.querySelector('#demo');
    ReactDOM.render(template, el)
})()