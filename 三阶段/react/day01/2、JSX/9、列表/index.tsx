(() => {
    // 定义数组teachsType的数据类型
    interface teachersType {
        name: string,
        id: number

    }

    const teachers: teachersType[] = [
        {
            name: 'yao',
            id: 2
        }, {
            name: 'lin',
            id: 1
        }, {
            name: 'lin',
            id: 3
        }
    ]
    const arr: number[] = [<p key='1'>1</p>, <p key='2'>2</p>, 3]
    //View
    const template = <div>
        {arr}
        <ul>
            {(() => {
                let arr = [];
                for (let i = 0; i < teachers.length; i++) {
                    arr.push(<li key={i}>
                        {teachers[i].id}:{teachers[i].name}
                    </li>)
                }
                return arr
            })()}
        </ul>
        <ul>
            {(() => {
                return teachers.map((item, index) => {
                    return <li key={index}>
                        {item.id}:{item.name}
                    </li>
                })
            })()}
        </ul>
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)

})()